module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    config: {
        PORT: 4000,
        CONNECTIONSTRING: "mongodb+srv://Soumallya:soumallya@cluster0.ai6xx.mongodb.net/fivetravellers?retryWrites=true&w=majority",
        JWT_KEY: "JWT_SECRET_aksjdiUIOkmka97674bHyasydyvbc",
        EXPAIR_DATE: "1d",
        host: "localhost",
        user: "root",
        password: "Pupundey@123",
        database: "FiveTravells"
    },
    CommonQueryMessage: {
        MISSING_AUTH_TOKEN: "Authorization token is required",
        INVALID_AUTH_TOKEN: "Invalid authtoken id",
        TOKEN_MISS_MATCHED: "Unauthorized user",
        LOGIN_SUCCESS: function (userName) { return `${userName} LOGIN SUCCESS` },
        USER_EXIST: function (name, details) { return `User exists with this ${name} :- ${details} , try another` },
        USER_INVALID_PASSWORD: 'Invalid User Password',
        USER_CREATE: 'User Create SuccessFull',
        USER_NOT_CREATE: 'User Not Created',
        DATA_INSERT_SUCCESS: "Data Insert Successfull",
        NO_FLIGHT_DETAILS: function (name) { return `No Flight Avalable ${name}`}
    },
    DetabaseMessage: {
        DETABASE_CERATE_SUCCESSFULL: function (name) { return `${name} detabase already exsist's` },
        DETABASE_CERATE_ERROR: function (name) { return `${name} dataBase created successFull` }
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid fields'
    },
}