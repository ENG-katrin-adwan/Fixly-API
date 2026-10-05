const express = require("express");
const router = express.Router();

const reviewController = require("../Controllers/review.controller");

router.get("/", reviewController.getAll)

router.get("/statistics", reviewController.statistics)

router.get("/:id", reviewController.getOne)

router.post("/add", reviewController.add)

router.put("/update/:id", reviewController.update)

router.delete("/delete/:id", reviewController.remove)

module.exports = router;