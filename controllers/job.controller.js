module.exports = {
    async create(ctx){
        try{
            if(!ctx.request.body.title){
                ctx.throw(400, 'please provide the job title');
            }
            if(!ctx.request.body.CompanyId){
                ctx.throw(400, 'please provide the job CompanyId');
            }
            let title = ctx.request.body.title;
            let CompanyId = ctx.request.body.CompanyId;
            ctx.body = await ctx.db.Job.create({
                title,
                CompanyId
            });
        }catch(err){
            ctx.throw(500, err);
        }
    },
    async find(ctx){
        try{
            ctx.body = await ctx.db.Job.findAll({
                include:[
                    {
                        model:ctx.db.Candidate
                    }
                ]
            });
        }catch(err){
            ctx.throw(500, err);
        }
    }
}