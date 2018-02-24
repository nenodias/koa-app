module.exports = {
    async create(ctx){
        try{
            let candidate = null;
            if(ctx.request.body.id){
                candidate = await ctx.db.Candidate.findOne({
                   where:{
                       id:ctx.request.body.id
                   } 
                });
            }else{
                candidate = await ctx.db.Candidate.create({
                    firstName:ctx.request.body.firstName,
                    lastName:ctx.request.body.lastName,
                    email:ctx.request.body.email
                });
            }

            ctx.body = await ctx.db.Application.create({
                JobId:ctx.request.body.JobId,
                CandidateId:candidate.id
            });
        }catch(err){
            ctx.throw(500, err);
        }
    }
}