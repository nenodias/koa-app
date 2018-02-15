const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-parser');
const PORT = 4000;

const app = new Koa();
const router = new Router();
const db = require('./models');
//db.sequelize.sync({ force:true }) //Recreate the tables
db.sequelize.sync()
.then(() => console.log('Models sychronized!'))
.catch((err) => console.error(err));

router.get('/', async(ctx, next) => {
    ctx.body = "Hello";
});

app.use(router.routes());
app.use(router.allowedMethods());
app.listen(PORT);
console.log(`Server listening on port ${PORT}`);