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
const availableCodes = require('./availableCodes.json')

async function jsonFiller() {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()

  for (let i = 0; i < availableCodes.length; i++) {
    await page.goto(`https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/${availableCodes[i]}`, {
      waitUntil: 'domcontentloaded',
      timeout: 0
    })
    let currentContent = await page.evaluate(el => el.textContent, (await page.$$('p'))[0])
    console.log(availableCodes[i])
    console.log(currentContent)
  }
  browser.close()
}
jsonFiller()
