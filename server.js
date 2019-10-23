const express = require('express')
const http = require('./httpStatus.json')

function endpointCreation() {
  try {
    const app = express()
    const port = process.env.PORT || 5000

    // providing a dynamic endpoint for status code descriptions
    app.get('/api/http-status/:statusCode', async (req, res) => {
      let id = req.params.statusCode
      http.status[id] ? res.json(http.status[id]) : res.json({ error: 'no such HTTP status code available!' })
      console.log(`/api/http-status/${id} endpoint has been called!`)
    })

    app.listen(port)

    console.log(`API is listening on ${port}`)
  } catch (e) {
    console.error(e)
  }
}
endpointCreation()
