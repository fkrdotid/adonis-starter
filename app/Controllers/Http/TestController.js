'use strict'
const Auth = use('App/Services/JWTAuth')
const Logger = use('Logger')
const moment = require('moment');
const today = moment().format("YYYY-MM-DD hh:mm:ss");

class TestController {
    async test ({ request, response }) {
        // const a = 1
        try {
            const userToken = {
                user_id : 1,
                username : "fikri",
                role_id : a
            }
            let token = await Auth.generateTokenExp(userToken)
            return response.create({data : token}, 201)
        } catch (error) {
            Logger.error(error.message+" - "+request.url() +" - "+ today)
            return response.create({}, 500)

        }
    }
}

module.exports = TestController
