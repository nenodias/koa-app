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

      ctx.body = ctx.db.User.create({
        email,
        password
      });
    } catch (err) {
      ctx.throw(500, err);
    }
  }
};
