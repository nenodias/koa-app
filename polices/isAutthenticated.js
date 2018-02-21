const JwtService = require('../services/jwt.service');

module.exports = async (ctx, next) => {
    let token = ';'
    debugger;
    if (ctx.req.headers && ctx.req.headers.authorization) {
        token = ctx.req.headers['authorization'];
    } else {
        ctx.throw(404, 'Authorization header is missing');
    }
    const decodedToken = JwtService.verify(token);
    const {payload} = decodedToken;
    const user = await ctx.db.User.findOne({
        where: {
            id: payload.user
        }
    });
    if (user && user.id) {
        ctx.state.user = user;
    } else {
        ctx.throw(401, 'Unauthorized');
    }
    return await next();
}