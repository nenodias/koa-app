const Router = require('koa-router');
const router = new Router();
const {CompanyController} = require('../controllers');

router.post('/companies', CompanyController.create);
router.get('/companies', CompanyController.find);
router.get('/companies/:id', CompanyController.findOne);

module.exports = router;