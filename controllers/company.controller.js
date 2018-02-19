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
            const company = await ctx.db.Company.findOne({where: {id: ctx.params.id} });
            if(!company){
                ctx.throw(404, 'company id is invalid');
            }
            ctx.body = company;
        }catch(err){
            ctx.throw(500, err);
        }
    },
    async destroy(ctx){
        try{
            const results = await ctx.db.Company.destroy({where: {id: ctx.params.id} });
            results === 0 ? ctx.throw(500, 'invalid id provided') : ctx.body = `company is deleted with id ${ctx.params.id}`;
        }catch(err){
            ctx.throw(500, err);
        }
    },
    async update(ctx){
        try{
            let data = {};
            if(ctx.request.body.name){
                data["name"] = ctx.request.body.name;
            }
            if(ctx.request.body.city){
                data["city"] = ctx.request.body.city;
            }
            if(ctx.request.body.address){
                data["address"] = ctx.request.body.address;
            }
            const results = await ctx.db.Company.update(data,
                {
                    where: {id: ctx.params.id} 
                }
            );
            results === 0 ? ctx.throw(500, 'invalid id provided') : ctx.body = `company is update with id ${ctx.params.id}`;
        }catch(err){
            ctx.throw(500, err);
        }
    }
};