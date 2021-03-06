const express = require("express");
const asyncHandler = require("express-async-handler");
const { handleValidationErrors } = require('../../utils/validation');
const { check, validationResult } = require('express-validator');
const { Car, Comment, User } = require("../../db/models");

const router = express.Router();


// -----------------CARS------------------------

//GET ALL CARS
router.get('/', asyncHandler(async(req, res) => {
  const car = await Car.findAll();

  return res.json({car})
}))


//GET ALL CARS OF A SPECIFIC USER
router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
  const userId = parseInt(req.params.id, 10);

  const car = await Car.findAll({
      where: { userId },
      include: User
  })
  return res.json({ car })
}));


//GET A SINGLE CAR
router.get('/car/:id', asyncHandler(async(req, res) => {

  const id = parseInt(req.params.id, 10);

  const car = await Car.findByPk(id, {include: User})
  return res.json({ car })
}))


//UPLOAD A CAR
router.post('/', asyncHandler(async(req, res) => {
  const { userId, name, description, imageUrl } = req.body;

  const car = await Car.build({ userId, name, description, imageUrl });

  await car.save();
  return res.json(car)
}));


//DELETE A CAR
router.delete('/car/:id/delete', asyncHandler(async(req, res) => {
  const id = parseInt(req.params.id, 10);

  const car = await Car.findByPk(id);

  await car.destroy();
  return res.json({ car })
}))


//EDIT A CAR
router.put('/car/:id/edit', asyncHandler(async(req, res) => {
  const { description, name, imageUrl } = req.body;

  const id = parseInt(req.params.id, 10);

  const car = await Car.findByPk(id);

  await car.update({ description, name, imageUrl });
  return res.json(car);
}));


// -----------------COMMENTS------------------------


//VALIDATE COMMENT
const validateComment = [
  check('comment')
    .exists({ checkFalsy: true })
    .withMessage("Must provide a comment"),
  handleValidationErrors
]

//POST A COMMENT
router.post("/car/:id/comment", validateComment, asyncHandler(async(req, res) => {
  const { userId, carId, comment } = req.body;
  const newComment = await Comment.build({ userId, carId, comment });
  const validationErrors = validationResult(req);

  if(validationErrors.isEmpty()) {
    await newComment.save();
    const comments = await Comment.findAll({
      where: { carId },
      include: User
    });
    return res.json(comments);
  } else {
    const errors = validationErrors.array().map((e) => e.msg);
    return res.json(errors);
  }
}));


//GET ALL COMMENTS OF A SPECIFIC CAR
router.get('/car/:id/comments', asyncHandler(async(req, res) => {
  const carId = parseInt(req.params.id, 10);

  const comments = await Comment.findAll({
    where: {
      carId,
    },
    order: [['createdAt', 'DESC']],
    include: User
  });
  return res.json( comments );

}))


// DELETE COMMENT
router.delete('/car/:carId/comment/:commentId/delete', asyncHandler(async(req, res) => {
  const carId = parseInt(req.params.carId, 10);
  const commentId = parseInt(req.params.commentId, 10);

  const comment = await Comment.findByPk(commentId);

  await comment.destroy();

  const comments = await Comment.findAll({
    where: {
      carId
    },
    include: User
  });

  return res.json(comments)
}))


//EDIT A COMMENT
router.put('/car/:carId/comment/:commentId/edit', asyncHandler(async(req, res) => {


  const carId = parseInt(req.params.carId, 10);
  const commentId = parseInt(req.params.commentId, 10);

  const oldComment = await Comment.findByPk(commentId);
  await oldComment.update( req.body );
  const comments = await Comment.findAll({
    where: {
      carId
    }
  })
  return res.json(comments);

}))



module.exports = router;
