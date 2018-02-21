const UtilService = require('../services/util.service');

module.exports = {
  async signup(ctx) {
    try {
      let { email, password } = ctx.request.body;
      if (!email) {
        ctx.throw(400, "please provide email");
      }
      if (!password) {
        ctx.throw(400, "please provide password");
      }
      const encriptedPassword = await UtilService.hashPassword(password);
      let user = ctx.db.User.create({
        email:email,
        password:encriptedPassword
      });
      ctx.body = 'Signup successful';
    } catch (err) {
      ctx.throw(500, err);
    }
  }
};
