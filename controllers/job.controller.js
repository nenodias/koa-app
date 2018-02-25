module.exports = {
    /** 
   * @api {POST} /jobs Jobs Create
   * @apiGroup Jobs
   * @apiName createJob 
   * @apiParam {String} [title] title must be provided
   * @apiParam {Number} [CompanyId] CompanyId must be provided
   * @apiParamExample {String} Request Example:
   * {
   *  "title":"Node.js Developer",
   *  "CompanyId": 1
   * }
   * @apiSuccess {Object} A newly created job object
   * @apiSuccessExample {json} Job-Success-Response :
   * {
   *  "id": 1,
   *  "title":"Node.js Developer",
   *  "CompanyId": 1
   * }
   * @apiExample {curl} Example usage:
   *  curl -H "Content-Type: application/json" -X POST -d '{"title":"Node.js Developer","CompanyId": 1}' http://localhost:4000/jobs
   * @apiDescription User can create a job into the system
   * @apiHeader {String} Authorization JWT Authorization header
   * @apiHeaderExample {json} Request Authorization header
   * {
   *    "authorization": "akofiwehdjsnvbasdopawp21312wklsjlcxz"
   * }
  */
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
    /** 
   * @api {GET} /jobs Get Jobs
   * @apiGroup Jobs
   * @apiName getJobs
   * @apiSuccess {Object[]} Job list of Jobs with Cadidates
   * @apiSuccessExample {json} Job-Find-Success-Response :
   * [
   *    {
   *        "Candidates": [
   *            {
   *                "Application": {
   *                    "CandidateId": 2,
   *                    "JobId": 1,
   *                    "createdAt": "2018-02-24T00:18:59.357Z",
   *                    "status_id": null,
   *                    "updatedAt": "2018-02-24T00:18:59.357Z"
   *                },
   *                "createdAt": "2018-02-24T00:18:59.192Z",
   *                "email": "horacio.dias@yahoo.com",
   *                "firstName": "Hor\ufffdcio",
   *                "id": 2,
   *                "lastName": "Dias",
   *                "updatedAt": "2018-02-24T00:18:59.192Z"
   *            },
   *            {
   *                "Application": {
   *                    "CandidateId": 1,
   *                    "JobId": 1,
   *                    "createdAt": "2018-02-24T00:20:49.845Z",
   *                    "status_id": null,
   *                    "updatedAt": "2018-02-24T00:20:49.845Z"
   *                },
   *                "createdAt": "2018-02-24T00:05:21.492Z",
   *                "email": "horacio.dias@yahoo.com",
   *                "firstName": "Hor\ufffdcio",
   *                "id": 1,
   *                "lastName": "Dias",
   *                "updatedAt": "2018-02-24T00:05:21.492Z"
   *            }
   *        ],
   *        "createdAt": "2018-02-24T00:01:50.129Z",
   *        "id": 1,
   *        "title": "NodeJS Developer",
   *        "updatedAt": "2018-02-24T00:01:50.129Z"
   *    },
   *    {
   *        "Candidates": [],
   *        "createdAt": "2018-02-24T00:02:10.464Z",
   *        "id": 4,
   *        "title": "PHP Developer",
   *        "updatedAt": "2018-02-24T00:02:10.464Z"
   *    },
   *    {
   *        "Candidates": [],
   *        "createdAt": "2018-02-24T00:02:15.442Z",
   *        "id": 5,
   *        "title": "Java Developer",
   *        "updatedAt": "2018-02-24T00:02:15.442Z"
   *    }
   * ]
   * @apiExample {curl} Example usage:
   *  curl -H "Content-Type: application/json" -X GET http://localhost:4000/jobs
   * @apiDescription User can get all jobs with candidates
   * @apiHeader {String} Authorization JWT Authorization header
   * @apiHeaderExample {json} Request Authorization header
   * {
   *    "authorization": "akofiwehdjsnvbasdopawp21312wklsjlcxz"
   * }
  */
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