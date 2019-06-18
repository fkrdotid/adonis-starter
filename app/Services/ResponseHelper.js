'use strict'
const HttpStatus = require('statuses');

class ResponseHelper {

    async handle({ request, response}, next) {
        response.create = (data, code, message) => {
            let status_api = true;
            if (code == 200 || code == 201 ) {
                status_api = true;
            } else {
                status_api = false;
            }
            let result = {
                success: status_api,
                code : HttpStatus(code),
                status : HttpStatus[code],
                message : HttpStatus[code]
            }

            if (data) result.data = data
            if (message) result.message = message
            return response.status(result.code).send(result)
        }
        await next()
    }
}

module.exports = ResponseHelper
