const express = require("express");
const asyncHandler = require("express-async-handler");
const { Car } = require("../../db/models");

const router = express.Router();



//get all cars of any user WORKS
router.get('/', asyncHandler(async(req, res) => {
  const car = await Car.findAll();

  return res.json({car})
}))


// get all cars of specific user WORKS
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  const car = await Car.findAll({
      where: { userId }
  })
  return res.json({ car })
}));


// get single car works
// router.get('/cars/:id(\\d+)', asyncHandler(async (req, res) => {
//   const carId = parseInt(req.params.id, 10);
//   const car = await Car.findByPk(carId)
//   return res.json({ car })
// }));


// get a single car(read) works
router.get('/car/:id', asyncHandler(async(req, res) => {

  const id = parseInt(req.params.id, 10);

  const car = await Car.findByPk(id)
  return res.json({ car })
}))


//WORKING ON ---------------


//upload a car(create) TBD Tomorrow
router.post('/', asyncHandler(async(req, res) => {
  const { userId, name, description, imageUrl } = req.body;

  const car = await Car.build({ userId, name, description, imageUrl });

  await car.save();
  // const cars = await Car.findAll({ where: { userId }});
  return res.json(car)

}));

//WORKING ON ---------------











//edit a car(update) TBD
router.put('/car/:id(\\d+)/edit', asyncHandler(async(req, res) => {
  const { description } = req.body;

  const id= parseInt(req.params.id, 10);

  const car = await Car.findByPk(id);

  await car.update({ description });
  return res.json(car);
}));




//delete a car(destroy) TBD
router.delete('/car/:id(\\d+)/delete', asyncHandler(async(req, res) => {
  const id = parseInt(req.params.id, 10);

  const car = await Car.findByPk(id);

  const userId = car.userId

  await car.destroy();
  const cars = await Car.findAll({ where: { userId } });
  return res.json({ cars })
}))



module.exports = router;
