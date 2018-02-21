const Router = require('koa-router');
const router = new Router();
const {
    CompanyController,
    JobController,
    ApplicationController,
    UserController
} = require('../controllers');

const isAuthenticated = require('../polices/isAutthenticated');

router.post('/companies', isAuthenticated, CompanyController.create);
router.get('/companies', isAuthenticated, CompanyController.find);
router.get('/companies/:id', isAuthenticated, CompanyController.findOne);
router.delete('/companies/:id', isAuthenticated, CompanyController.destroy);
router.put('/companies/:id', isAuthenticated, CompanyController.update);

router.post('/jobs', isAuthenticated, JobController.create);
router.get('/jobs', isAuthenticated, JobController.find);

router.post('/applications', ApplicationController.create);

router.post('/signup', UserController.signup);
router.post('/login', UserController.login);

module.exports = router;