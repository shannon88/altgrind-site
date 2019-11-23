var express = require('express')
var app = express()

const serverless = require('serverless-http')
const router = express.Router()

var Parser = require('rss-parser')
var parser = new Parser()

router.get('/api/rss', async (req, res) => {
    try {
        const feed = await parser.parseURL('https://anchor.fm/s/c383d4c/podcast/rss')
        res.send({ feed: feed })
    } catch (err) {
        res.status(500)
        res.send(err)
    }
})





// For testing the API sans netlify platform
// app.listen("9000", () => console.log("Server running"))

app.use('/.netlify/functions/server', router)

module.exports = app
module.exports.handler = serverless(app)