const express = require("express");
const asyncHandler = require("express-async-handler");
const { User, Car } = require("../../db/models");
const { Op } = require("sequelize");


const router = express.Router();



router.post("/search", asyncHandler(async (req, res) => {
    const { results } = req.body;

    const cars = await Car.findAll({
      where: {
        name: {
          [Op.iLike]: `%${results}%`,
        },
      },
      order: [["name", "DESC"]],
    });
    res.json({ cars });
  })
);







module.exports = router;
