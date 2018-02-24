const UtilService = require('../services/util.service');
const JwtService = require('../services/jwt.service');

module.exports = {
  /** 
   * @api {POST} /signup Cadastre-se
   * @apiGroup Users
   * @apiName SignupUser 
   * @apiParam {String} [email] Email must be provided
  */
  async signup(ctx) {
    try {
      let {
        email,
        password
      } = ctx.request.body;
      if (!email) {
        ctx.throw(400, "please provide email");
      }
      if (!password) {
        ctx.throw(400, "please provide password");
      }
      const encriptedPassword = await UtilService.hashPassword(password);
      let user = ctx.db.User.create({
        email: email,
        password: encriptedPassword
      });
      ctx.body = 'Signup successful';
    } catch (err) {
      ctx.throw(500, err);
    }
  },
  async login(ctx) {
    try {
      let {
        email,
        password
      } = ctx.request.body;
      if (!email) {
        ctx.throw(400, "please provide email");
      }
      if (!password) {
        ctx.throw(400, "please provide password");
      }
      const user = await ctx.db.User.findOne({
        where: {
          email:email
        }
      });
      const matched = UtilService.comparePassword(password, user.password);
      if (matched) {

        const token = JwtService.issue({
          payload: {
            user: user.id
          }
        }, '1 day');
        ctx.body = {token};

      } else {
        ctx.throw(500, 'invalid password');
      }
    } catch (err) {
      ctx.throw(500, err);
    }
  }
};