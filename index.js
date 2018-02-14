const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-parser');
const PORT = 3000;
const _ = require('lodash');

const app = new Koa();
const router = new Router();

app.use(bodyParser());

let posts = [
	{
		"id":1,
		"name":"Nodejs Developer",
		"content":"This look nice"
	},
	{
		"id":2,
		"name":"Python Developer",
		"content":"This is nice, good work!"
	},
	{
		"id":3,
		"name":"Cobol Developer",
		"content":"Help!I need run of this life!"
	}
];


router.get('/', async(ctx, next) => {
	ctx.body = "Hello world";
});

router.get('/posts', async(ctx, next) => {
	ctx.body = posts;
});

router.post('/posts', async(ctx, next) => {
	let {id, name, content} = ctx.request.body;
	if(!id){
		ctx.throw(400, 'id is required field');
	}
	if(!name){
		ctx.throw(400, 'name is required field');
	}
	if(!content){
		ctx.throw(400, 'content is required field');
	}
	posts.push({id, name, content});
	ctx.body = posts;
});


router.get('/posts/:id', async(ctx) => {
	let id = parseInt(ctx.params.id);
	let post = posts.find( post => post.id === id);
	if(post === undefined){
		ctx.throw(404, 'post not found');
	}
	ctx.body = post;
});

router.delete('/posts/:id', async(ctx) => {
	let id = parseInt(ctx.params.id);
	let post = _.remove(posts, post => post.id === id);
	if(post === undefined){
		ctx.throw(404, 'post not found');
	}else{
		ctx.body = post;
	}
});

router.put('/posts/:id', async(ctx) => {
	let findId = parseInt(ctx.params.id);
	let { id, name, content } = ctx.request.body;
	let index = _.findIndex(posts, post => post.id === findId);
	if(index === -1){
		ctx.throw(404, 'post not found');
	}else{
		if(id){
			posts[index].id = id;
		}
		if(name){
			posts[index].name = name;
		}
		if(content){
			posts[index].content = content;
		}
		ctx.body = posts[index];
	}
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(PORT);
console.log(`Server is listening on PORT ${PORT}`);
