const router = require('express').Router();
//const lesson1Controller = require('../controllers/lesson1');
//routes.get('/', lesson1Controller.cassieRoute);
//routes.get('/nikki', lesson1Controller.nikkiRoute);
router.get('/', (req, res) => { res.send('Hello World');});
router.use('/contacts', require('./contacts'));

module.exports = router;