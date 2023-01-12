const mysql = require('mysql')
const Constants = require('./Constants/Constants')

const connection = mysql.createConnection({
    host: Constants.config.host,
    user: Constants.config.user,
    password: Constants.config.password
})

connection.connect(function (err) {
    if (err) console.log(err);
    connection.query(`CREATE DATABASE IF NOT EXISTS ${Constants.config.database}`, (err, result) => {
        if (err) console.log(err);
        if (result.warningCount) {
            console.log(Constants.DetabaseMessage.DETABASE_CERATE_ERROR(Constants.config.database));
            process.exit(0);
        } else {
            console.log(Constants.DetabaseMessage.DETABASE_CERATE_SUCCESSFULL(Constants.config.database));
            process.exit(0);
        }
    })
})
