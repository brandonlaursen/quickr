const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const carRouter = require('./cars.js')
const searchRouter = require("./search.js");


router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/cars', carRouter);

router.use("/search", searchRouter);

module.exports = router;
