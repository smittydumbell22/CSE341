const router = require('express').Router();

router.use('/', require('./swagger'));

router.get('/', (req, res) => {
    //#swagger.tags=['Hello World']
    res.send('Hello World');
});
// const lesson1Controller = require('../controllers/lesson1');
// routes.get('/', lesson1Controller.cassieRoute);
// routes.get('/nikki', lesson1Controller.nikkiRoute);
// router.get('/', (req, res) => { res.send('Hello World');});
router.use('/animals', require('./animals'));

module.exports = router;