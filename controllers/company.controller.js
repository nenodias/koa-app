module.exports = {
   /** 
   * @api {POST} /companies Companies Create
   * @apiGroup Companies
   * @apiName createCompany
   * @apiParam {String} [name] name must be provided
   * @apiParam {Number} [address] address must be provided
   * @apiParam {Number} [city] city must be provided
   * @apiParamExample {String} Request Example:
   * {
   *  "name":"Google",
   *  "address": "St 70",
   *  "city": "California"
   * }
   * @apiSuccess {Object} A-newly-created-company-object
   * @apiSuccessExample {json} Company-Create-Success-Response :
   * {
   *  "id": 1,
   *  "name":"Google",
   *  "address": "St 70",
   *  "city": "California",
   *  "UserId": 1,
   *  "Jobs": []
   * }
   * @apiExample {curl} Example usage:
   *  curl -H "Content-Type: application/json" -X POST -d '{"name":"Google", "address": "St 70", "city": "California"}' http://localhost:4000/company
   * @apiDescription User can create a job into the system
   * @apiHeader {String} Authorization JWT Authorization header
   * @apiHeaderExample {json} Request Authorization header
   * {
   *    "authorization": "akofiwehdjsnvbasdopawp21312wklsjlcxz"
   * }
  */
    async create(ctx){
        try{
            let UserId = ctx.state.user.id;
            ctx.body = await ctx.db.Company.create({
                name: ctx.request.body.name,
                city: ctx.request.body.city,
                address: ctx.request.body.address,
                UserId: UserId
            });
        }catch(err){
            ctx.throw(500, err);
        }
    },
    /** 
   * @api {GET} /companies Get Companies
   * @apiGroup Companies
   * @apiName getCompanies
   * @apiSuccess {Object[]} Companies list of Companies with Jobs
   * @apiSuccessExample {json} Companies-Find-Success-Response :
   * [
   *     {
   *         "Jobs": [
   *             {
   *                 "CompanyId": 1,
   *                 "createdAt": "2018-02-24T00:02:15.442Z",
   *                 "id": 5,
   *                 "title": "Java Developer",
   *                 "updatedAt": "2018-02-24T00:02:15.442Z"
   *             }
   *         ],
   *         "UserId": 1,
   *         "address": "California St 12",
   *         "city": "California",
   *         "createdAt": "2018-02-24T00:00:29.268Z",
   *         "id": 1,
   *         "name": "Facebook",
   *         "updatedAt": "2018-02-24T00:00:29.268Z"
   *     }
   * ]
   * @apiExample {curl} Example usage:
   *  curl -H "Content-Type: application/json" -X GET http://localhost:4000/companies
   * @apiDescription User can get all companies
   * @apiHeader {String} Authorization JWT Authorization header
   * @apiHeaderExample {json} Request Authorization header
   * {
   *    "authorization": "akofiwehdjsnvbasdopawp21312wklsjlcxz"
   * }
  */
    async find(ctx){
        try{
            let UserId = ctx.state.user.id;
            ctx.body = await ctx.db.Company.findAll({
                UserId:UserId,
                include:[
                    {
                        model:ctx.db.Job
                    }
                ]
            });
        }catch(err){
            ctx.throw(500, err);
        }
    },
    /** 
   * @api {GET} /companies/:id Get Company
   * @apiGroup Companies
   * @apiName getCompany
   * @apiSuccess {Object} Get a Company by id
   * @apiSuccessExample {json} Company-Find-Id-Success-Response :
   *     {
   *         "Jobs": [
   *             {
   *                 "CompanyId": 1,
   *                 "createdAt": "2018-02-24T00:02:15.442Z",
   *                 "id": 5,
   *                 "title": "Java Developer",
   *                 "updatedAt": "2018-02-24T00:02:15.442Z"
   *             }
   *         ],
   *         "UserId": 1,
   *         "address": "California St 12",
   *         "city": "California",
   *         "createdAt": "2018-02-24T00:00:29.268Z",
   *         "id": 1,
   *         "name": "Facebook",
   *         "updatedAt": "2018-02-24T00:00:29.268Z"
   *     }
   * @apiExample {curl} Example usage:
   *  curl -H "Content-Type: application/json" -X GET http://localhost:4000/companies/1
   * @apiDescription User can get one company
   * @apiHeader {String} Authorization JWT Authorization header
   * @apiHeaderExample {json} Request Authorization header
   * {
   *    "authorization": "akofiwehdjsnvbasdopawp21312wklsjlcxz"
   * }
  */
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
    /** 
   * @api {DELETE} /companies/:id Delete Company
   * @apiGroup Companies
   * @apiName deleteCompany
   * @apiSuccess {String} Delete a Company by id
   * @apiSuccessExample
   *  company is deleted with id 2
   * @apiExample {curl} Example usage:
   *  curl -H "Content-Type: application/json" -X DELETE http://localhost:4000/companies/1
   * @apiDescription User can delete one company
   * @apiHeader {String} Authorization JWT Authorization header
   * @apiHeaderExample {json} Request Authorization header
   * {
   *    "authorization": "akofiwehdjsnvbasdopawp21312wklsjlcxz"
   * }
  */
    async destroy(ctx){
        try{
            const results = await ctx.db.Company.destroy({where: {id: ctx.params.id} });
            results === 0 ? ctx.throw(500, 'invalid id provided') : ctx.body = `company is deleted with id ${ctx.params.id}`;
        }catch(err){
            ctx.throw(500, err);
        }
    },
       /** 
   * @api {PUT} /companies/:id Companies Update
   * @apiGroup Companies
   * @apiName updateCompany
   * @apiParam {String} [name] city is optional
   * @apiParam {Number} [address] city is optional
   * @apiParam {Number} [city] city is optional
   * @apiParamExample {String} Request Example:
   * {
   *  "name":"Google",
   *  "address": "St 70",
   *  "city": "California"
   * }
   * @apiSuccess {String} A message with id
   * @apiSuccessExample {String} Company-Update-Success-Response :
   * company is update with id 3
   * @apiExample {curl} Example usage:
   *  curl -H "Content-Type: application/json" -X POST -d '{"name":"Google", "address": "St 70", "city": "California"}' http://localhost:4000/company
   * @apiDescription User can create a job into the system
   * @apiHeader {String} Authorization JWT Authorization header
   * @apiHeaderExample {json} Request Authorization header
   * {
   *    "authorization": "akofiwehdjsnvbasdopawp21312wklsjlcxz"
   * }
  */
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