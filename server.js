const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-parser');
const _ = require('lodash');
const PORT = 4000;

const router = require('./routes');

const app = new Koa();
const db = require('./models');
//db.sequelize.sync({ force:true }) //Recreate the tables
//db.sequelize.sync() //Create on first time tables
db.sequelize.authenticate()
    .then(() => console.log('Models sychronized!'))
    .catch((err) => console.error(err));

router.get('/', async (ctx, next) => {
    ctx.body = "Hello";
});

app.context.db = db;
app.use(bodyParser());
app.use(router.routes());
app.listen(PORT);
console.log(`Server listening on port ${PORT}`);