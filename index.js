const express = require('express')
const config = require('config')
const dbConn = require('./lib/db')
const app = express()

app.get("/data", (req, res, next) => {
    res.set("content-type", "application/json")
    dbConn.query(config.get('app.query'), (err,rows) => {
        if(err) {
            return res.json({data:err})
        } else {
            return res.json({data:rows})
        }
    })
})

app.listen(config.get('app.port'), () => {
    console.log(`App listening to Port 3000....`)
    console.log('Press Ctrl+C to quit.')
})