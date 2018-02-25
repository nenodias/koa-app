module.exports = {
   /** 
   * @api {POST} /applications Application Create
   * @apiGroup Applications
   * @apiName createApplication 
   * @apiParam {String} [id] id of candidate if just want associate to a job
   * @apiParam {String} [firstName] firstName must be provided if a new candidate
   * @apiParam {String} [lastName] lastName must be provided if a new candidate
   * @apiParam {String} [email] email must be provided if a new candidate
   * @apiParam {Number} [JobId] JobId must be provided
   * @apiParamExample {String} Request Example:
   * {
   *  "id": 1,
   *  "JobId": 1
   * }
   * //Another Example Creating Candidate
   * {
   *  "firstName": "Manolo",
   *  "lastName": "The Cat",
   *  "email": "manolo@thecat.com",
   *  "JobId": 2
   * }
   * @apiSuccess {Object} A newly created application object with candidate
   * @apiSuccessExample {json} Application-Success-Response :
   * {
   *  "CandidateId": 2,
   *  "JobId": 3,
   *  "createdAt": "2018-02-25T08:52:14.634Z",
   *  "updatedAt": "2018-02-25T08:52:14.634Z"
   * }
   * @apiExample {curl} Example usage:
   *  curl -H "Content-Type: application/json" -X POST -d '{"id":2,"JobId": 1}' http://localhost:4000/applications
   * @apiDescription User can create application with candidate into the system
   * @apiHeader {String} Authorization JWT Authorization header
   * @apiHeaderExample {json} Request Authorization header
   * {
   *    "authorization": "akofiwehdjsnvbasdopawp21312wklsjlcxz"
   * }
  */
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