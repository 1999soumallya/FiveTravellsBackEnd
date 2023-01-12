const asyncHandler = require('express-async-handler')
const XLSX = require('xlsx')
const path = require('path')
const Constants = require('../Constants/Constants')
const FileUploadModel = require('../Models/FileUploadModel')
const ImageUploadModel = require('../Models/ImageUploadModel')
const { ConnectMysql } = require('../Config/Connection')

const connection = ConnectMysql()

module.exports.FileUpload = asyncHandler(async (req, res) => {
    const filename = req.files.excel.name;
    const file = req.files.excel;
    let uploadPath = path.join(__dirname, '../public/flightdetails/') + filename;
    file.mv(uploadPath, (err) => {
        if (err) {
            console.log(err);
        }
        let workbook = XLSX.readFile(uploadPath)
        let sheet_namelist = workbook.SheetNames;
        let x = 0
        sheet_namelist.forEach(element => {
            let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]]);
            xlData.forEach((xlData) => {
                connection.query(`INSERT INTO FlightDetails(AIRLINE_LOGO, LOGO, FORM, SECTOR, DEPARTURE_DATE, DEPARTURE_TIME, FLIGHT_DERATION_AND_LAYOVER, ARRIVAL_TIME, TOTAL_SEATS, SEATS_AVAILABLE, SEATS_SOLD, PRICE) VALUES ('${xlData.AIRLINE_LOGO.trim()}','${xlData.LOGO.trim()}','${xlData.FORM.trim()}','${xlData.SECTOR.trim()}','${xlData.DEPARTURE_DATE.trim()}','${xlData.DEPARTURE_TIME.trim()}','${xlData.FLIGHT_DERATION_AND_LAYOVER.trim()}','${xlData.ARRIVAL_TIME}',${xlData.TOTAL_SEATS},${xlData.SEATS_AVAILABLE},${xlData.SEATS_SOLD},${xlData.PRICE})`, (err) => {
                    if (err) {
                        console.log(err);
                    }
                })
            })
            x++
        });
    });
    res.status(200).send(Constants.CommonQueryMessage.DATA_INSERT_SUCCESS)
})

module.exports.AirportDataUpload = asyncHandler(async (req, res) => {
    const filename = req.files.fileupload.name;
    const file = req.files.fileupload
    let uploadPath = path.join(__dirname, '../public/AirportDetails/') + filename
    file.mv(uploadPath, (err) => {
        if (err) {
            console.log(err);
        }
        let workbook = XLSX.readFile(uploadPath)
        let sheet_namelist = workbook.SheetNames
        let x = 0
        sheet_namelist.forEach(element => {
            let xlData = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_namelist[x]])
            xlData.forEach((xlData) => {
                connection.query(`INSERT INTO AirportDetails (City_Name, Airport_Code, Airport_Name, Country_Name, Country_Abbrev, World_Area_Code) VALUES ("${xlData.City_Name}", "${xlData.Airport_Code}", "${xlData.Airport_Name}", "${xlData.Country_Name}", "${xlData.Country_Abbrev}", ${xlData.World_Area_Code})`, (err, result) => {
                    if (err) {
                        console.log(err);
                    }
                })
            })
            x++
        });
    })
    res.status(200).send(Constants.CommonQueryMessage.DATA_INSERT_SUCCESS)
})

module.exports.PhotoUpload = asyncHandler(async (req, res) => {
    const filename = req.files.image.name
    const uploadPath = path.join(__dirname, '../public/FlightLogo') + filename.replaceAll(' ', '')
    const file = req.files.image
    file.mv(uploadPath, (err) => {
        console.log(err);
        res.status(404).send('File Upload Faield')
    })
    ImageUploadModel.insertMany({ ImageName: filename.replaceAll(' ', ''), ImagePath: uploadPath }, (err) => {
        if (err) {
            console.log(err.message.replace(/Error:/gi, '').trim());
        }
    })
})