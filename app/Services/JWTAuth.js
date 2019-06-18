'use strict'

const jwt = require('jsonwebtoken')
const Config = use('Config')
const secret = Config.get('app.secret')

class JWTAuth {

    static async generateToken(payload) {
        return new Promise((resolve, reject) => {
            // payload.exp = Math.floor(Date.now() / 1000) + (60 * 1440)
            jwt.sign(JSON.stringify(payload), secret,  (err, token) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(token)
                }
            })
        })
    }
    static async generateTokenExp(payload) {
        return new Promise((resolve, reject) => {
            payload.exp = Math.floor(Date.now() / 1000) + (60 * 720)
            jwt.sign(JSON.stringify(payload), secret,  (err, token) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(token)
                }
            })
        })
    }

    static decodeJWT(token) {

            try {
                return jwt.verify(token, secret);
            } catch (error) {
                return null
            }

    }

}

module.exports = JWTAuth
