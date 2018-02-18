module.exports = {
    async create(ctx){
        try{
            ctx.body = await ctx.db.Company.create({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                address: ctx.request.body.address
            });
        }catch(err){
            ctx.throw(500, err);
        }
    },
    async find(ctx){
        try{
            ctx.body = await ctx.db.Company.findAll();
        }catch(err){
            ctx.throw(500, err);
        }
    },
    async findOne(ctx){
        try{
            ctx.body = await ctx.db.Company.findOne({where: {id: ctx.params.id} });
        }catch(err){
            ctx.throw(500, err);
        }
    }
};