const mysql = require('mysql')
const config = require('config')

const connection = mysql.createConnection({
    host: config.get('db.host'),
    user: config.get('db.user'),
    password: config.get('db.password'),
    database: config.get('db.database')
})

connection.connect(function(err) {
    if (!!err) {
        console.log(err);
    } else {
        console.log('Connected..!')
    }
})

module.exports = connection