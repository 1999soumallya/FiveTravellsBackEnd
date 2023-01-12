const mongoose = require('mongoose')
const constants = require('../Constants/Constants')
const mysql = require('mysql')
const Constants = require('../Constants/Constants')
require('colors')

const ConnectMongoose = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(constants.config.CONNECTIONSTRING)
    const db = mongoose.connection
    db.on('error', (error) => console.error(`Error Is ${error}`.red))
    db.once('open', () => console.log(`Detabase Connected!`.inverse.green))
}

const ConnectMysql = () => {
    let connection = mysql.createConnection({
        host: "localhost",
        user: Constants.config.user,
        password: Constants.config.password,
        database: Constants.config.database
    })
    connection.connect(function (err) {
        if (err) console.log(err);
    })
    connection.query("CREATE TABLE IF NOT EXISTS`AirportDetails`(`id` int NOT NULL AUTO_INCREMENT, `City_Name` varchar(200) NOT NULL, Airport_Code varchar(200) NOT NULL,Airport_Name varchar(200) NOT NULL,Country_Name varchar(200) NOT NULL,Country_Abbrev varchar(200) NOT NULL,World_Area_Code int NOT NULL, PRIMARY KEY(`id`)) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci", (err, result) => {
        if (err) {
            console.log(err);
        }
    })
    connection.query("CREATE TABLE IF NOT EXISTS `FlightDetails`(`id` int NOT NULL AUTO_INCREMENT, `AIRLINE_LOGO` varchar(200) NOT NULL, `LOGO` varchar(200) NOT NULL,`FORM` varchar(200) NOT NULL,`SECTOR` varchar(200) NOT NULL,`DEPARTURE_DATE` DATE NOT NULL,`DEPARTURE_TIME` TIME NOT NULL,`FLIGHT_DERATION_AND_LAYOVER` varchar(200) NOT NULL, `ARRIVAL_TIME` TIME NOT NULL, `TOTAL_SEATS` int NOT NULL, `SEATS_AVAILABLE` int NOT NULL,`SEATS_SOLD` int NOT NULL,`PRICE` int NOT NULL,PRIMARY KEY(`id`)) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci", (err) => {
        if (err) {
            console.log(err);
        }
    })
    return connection
}

module.exports = { ConnectMongoose, ConnectMysql }