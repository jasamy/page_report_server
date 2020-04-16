const express = require('express')
const cors = require('cors');
const config = require('config')
const dbConn = require('./lib/db')
const app = express()

app.use(cors());

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
    console.log(`App listening to Port ${config.get('app.port')}....`)
    console.log('Press Ctrl+C to quit.')
})
