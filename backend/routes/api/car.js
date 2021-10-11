const express = require("express");
const asyncHandler = require("express-async-handler");
const { Car } = require("../../db/models");
const user = require("../../db/models/user");


const router = express.Router();

//get all cars
router.get('/', asyncHandler(async(req, res) => {
  const car = await Car.findAll();
  console.log(car)

  // return res.json({ cars })
  return res.json({car})
}))

//get a single car
// router.get('/:id', asyncHandler(async(req, res) => {

// }));


module.exports = router;
