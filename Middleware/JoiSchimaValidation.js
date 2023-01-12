const Joi = require('@hapi/joi')

const ValidateObjectSchema = (data, schema) => {
    const result = Joi.validata(data, schema, { convert: false })
    if (result.error) {
        const errorDetails = result.error.details.map(value => {
            return { error: value.message }
        })
        return errorDetails
    }
    return null
}

module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        const err = ValidateObjectSchema(req.body, schema)
        if(err) return res.status(404).send(err[0].error)
    }
}