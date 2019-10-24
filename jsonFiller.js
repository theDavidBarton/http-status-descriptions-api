/*
MIT License

Copyright (c) 2019 David Barton (theDavidBarton)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

const puppeteer = require('puppeteer')
const _ = require('lodash')
const availableCodes = ['200', '404', '503'] // require('./availableCodes.json')
const availableLocales = ['en-US', 'es', 'fr', 'ja', 'pt-BR', 'zh-CN']
let finalObj = { status: {} }
let status = []
let obj
let currentDescription
let currentName
let currentType

async function jsonFiller() {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  for (const code of availableCodes) {
    for (const locale of availableLocales) {
      try {
        // scrape current content from MDN references
        await page.goto(`https://developer.mozilla.org/${locale}/docs/Web/HTTP/Status/${code}`, {
          waitUntil: 'domcontentloaded',
          timeout: 0
        })
        currentDescription = await page.evaluate(el => el.textContent, (await page.$$('p'))[0]) // TODO: not just the first paragraph!
        currentName = await page.evaluate(el => el.textContent, await page.$('h1'))
        currentName = currentName.replace(/\d./g, '')

        if (code < 200) {
          // (100–199)
          currentType = 'Informational responses'
        } else if (code > 199 && code < 300) {
          // (200–299)
          currentType = 'Successful responses'
        } else if (code > 299 && code < 400) {
          // (300–399)
          currentType = 'Redirects'
        } else if (code > 399 && code < 500) {
          // (400–499)
          currentType = 'Client errors'
        } else if (code > 499 && code < 600) {
          // (500–599)
          currentType = 'Server errors'
        }
      } catch (e) {
        console.error(e)
      }
      // store current content in object
      try {
        obj = {
          //status: {
          [code]: {
            code: {},
            type: {},
            name: {},
            i18n: {
              [locale]: {
                description: {},
                copyright: { license: {}, licenseDetails: {}, source: {}, authors: {}, authorsDetails: {} }
              }
            }
          }
          //}
        }

        obj[code].code = code
        obj[code].type = currentType
        obj[code].name = currentName
        obj[code].i18n[locale].description = currentDescription
        obj[code].i18n[locale].copyright.license = 'CC-BY-SA 2.5.'
        obj[code].i18n[locale].copyright.licenseDetails = 'https://creativecommons.org/licenses/by-sa/2.5/'
        obj[code].i18n[locale].copyright.source = `https://developer.mozilla.org/${locale}/docs/Web/HTTP/Status/${code}`
        obj[code].i18n[locale].copyright.authors = 'Mozilla Contributors'
        obj[code].i18n[
          locale
        ].copyright.authorsDetails = `https://wiki.developer.mozilla.org/${locale}/docs/Web/HTTP/Status/${code}$history`

        status.push(obj)
        console.log('===========================')
        console.log(JSON.stringify(status))
      } catch (e) {
        console.error(e)
      }
    }
  }

  // https://stackoverflow.com/questions/40774697/how-to-group-an-array-of-objects-by-key
  finalObj = _.groupBy(status, statusCode => statusCode.code)

  // finalObj.status = Object.assign({ ...status }) // TODO: improve it like this: https://stackoverflow.com/questions/2454295/how-to-concatenate-properties-from-multiple-javascript-objects
  console.log('FINAL JSON WOWWWWWW ================================================================================')
  console.log(JSON.stringify(finalObj))

  browser.close()
}
jsonFiller()
