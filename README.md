# http-status-descriptions-api

[![Dependency Status](https://david-dm.org/theDavidBarton/http-status-descriptions-api.svg)](https://david-dm.org/http-status-descriptions-api)
![crocodile](https://img.shields.io/badge/crocodiles_in_the_basement-%F0%9F%90%8A_yes-orange.svg)

API to provide JSON format detailed information about the existing HTTP stauses, so for example one can use it on the frontend to explain users what a HTTP 502 means when he/she faces an error page.

## Usage

### API

`yarn start`

e.g.: `http://localhost:5000/api/http-status/502`

... will retrieve the HTTP status' description in JSON format e.g.:

```javascript
{
   "status": {
    "502": {
      "code": 502,
      "type": "Server errors",
      "name": "Bad Gateway",
      "i18n": {
        "en-US": {
          "description": "The server was acting as a gateway or proxy and received an invalid response from the upstream server.",
          "copyright": {
            "license": "CC-BY-SA 2.5.",
            "licenseDetails": "https://creativecommons.org/licenses/by-sa/2.5/",
            "source": "https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/502",
            "authors": "Mozilla Contributors",
            "authorsDetails": "https://wiki.developer.mozilla.org/en-US/docs/Web/HTTP/Status/502$history"
          }
        },
        "es": {
          "description": "El código de respuesta de error del servidor de HTTP 502 Bad Gateway indica que el servidor, mientras actuaba como una puerta de enlace o proxy, recibió una respuesta no válida del servidor ascendente.",
          "copyright": {
            "license": "CC-BY-SA 2.5.",
            "licenseDetails": "https://creativecommons.org/licenses/by-sa/2.5/",
            "source": "https://developer.mozilla.org/es/docs/Web/HTTP/Status/502",
            "authors": "Mozilla Contributors",
            "authorsDetails": "https://wiki.developer.mozilla.org/es/docs/Web/HTTP/Status/502$history"
          }
        },
        "fr": {
          "description": "Le code de réponse HTTP d'erreur serveur 502 Bad Gateway indique que le serveur, agissant comme une passerelle ou un proxy, a reçu une réponse invalide depuis le serveur en amont.\nUne passerelle peut faire référence à différents éléments en réseaux et une erreur 502 est habituellement quelque chose que vous ne pouvez pas corriger, mais qui nécessite une correction sur le serveur web ou le proxy par lequel vous passez pour y accéder.",
          "copyright": {
            "license": "CC-BY-SA 2.5.",
            "licenseDetails": "https://creativecommons.org/licenses/by-sa/2.5/",
            "source": "https://developer.mozilla.org/fr/docs/Web/HTTP/Status/502",
            "authors": "Mozilla Contributors",
            "authorsDetails": "https://wiki.developer.mozilla.org/fr/docs/Web/HTTP/Status/502$history"
          }
        },
        "ja": {
          "description": "HyperText Transfer Protocol (HTTP) の 502 Bad Gateway サーバーエラーレスポンスコードは、ゲートウェイまたはプロキシとして機能しているサーバーが上流のサーバーから無効なレスポンスを受け取ったことを示しています。",
          "copyright": {
            "license": "CC-BY-SA 2.5.",
            "licenseDetails": "https://creativecommons.org/licenses/by-sa/2.5/",
            "source": "https://developer.mozilla.org/ja/docs/Web/HTTP/Status/502",
            "authors": "Mozilla Contributors",
            "authorsDetails": "https://wiki.developer.mozilla.org/ja/docs/Web/HTTP/Status/502$history"
          }
        },
        "pt-BR": {
          "description": "O código de erro HTTP 502 Bad Gateway retornado pelo servidor indica que ele, enquanto atuando como um servidor intermediário (gateway ou proxy), recebeu uma resposta inválida do servidor para o qual a requisição foi encaminhada (upstream server).",
          "copyright": {
            "license": "CC-BY-SA 2.5.",
            "licenseDetails": "https://creativecommons.org/licenses/by-sa/2.5/",
            "source": "https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/502",
            "authors": "Mozilla Contributors",
            "authorsDetails": "https://wiki.developer.mozilla.org/pt-BR/docs/Web/HTTP/Status/502$history"
          }
        },
        "zh-CN": {
          "description": "502 Bad Gateway 是一种HTTP协议的服务器端错误状态代码，它表示作为网关或代理角色的服务器，从上游服务器（如tomcat、php-fpm）中接收到的响应是无效的。\nGateway （网关）在计算机网络体系中可以指代不同的设备，502 错误通常不是客户端能够修复的，而是需要由途径的Web服务器或者代理服务器对其进行修复。\n网路中有许多不同类型的错误代码，例如：500、502、503、504…等等，每一种错误代码都表示不同的错误。",
          "copyright": {
            "license": "CC-BY-SA 2.5.",
            "licenseDetails": "https://creativecommons.org/licenses/by-sa/2.5/",
            "source": "https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/502",
            "authors": "Mozilla Contributors",
            "authorsDetails": "https://wiki.developer.mozilla.org/zh-CN/docs/Web/HTTP/Status/502$history"
          }
        }
      }
    }
```

### Updating the content

A puppeteer (headless chrome) script crawls for descriptions on [MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

Run: `yarn scrape` or `node jsonFiller.js` to update the JSON file.

# Copyright

## HTTP status descriptions

See in `i18n.${locale}.copyright` for each HTTP status. Mostly from MDN by Mozilla Contributors licensed under CC-BY-SA 2.5.

## Software

MIT License

Copyright (c) 2019 David Barton

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
