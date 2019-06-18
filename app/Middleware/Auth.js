'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const jwt = use('App/Services/JWTAuth')
const Env = use('Env')
const ApiKey = Env.get('APP_KEY')

class Auth {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {Function} next
   */
  async handle ({ request, response }, next) {
    // call next to advance the request
    const all = request.all();
    const headers = request.headers();
    let token = all.accessToken == null ? headers.accesstoken : all.accessToken;
    let decodeToken = jwt.decodeJWT(token);
    console.log(decodeToken)
    await next()
  }
}

module.exports = Auth
