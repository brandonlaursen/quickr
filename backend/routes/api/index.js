const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const carRouter = require('./car.js')

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/car', carRouter);


module.exports = router;
