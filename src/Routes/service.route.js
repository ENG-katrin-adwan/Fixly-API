const express = require("express");
const router = express.Router();

const serviceController = require("../Controllers/service.controller");

router.get("/", serviceController.getAll)

router.get("/statistics", serviceController.statistics)

router.get("/:id", serviceController.getOne)

router.post("/add", serviceController.add)

router.put("/update/:id", serviceController.update)

router.delete("/delete/:id", serviceController.remove)

module.exports = router;