const express = require("express");
const router = express.Router();

const customerController = require("../Controllers/customer.controller");

router.get("/", customerController.getAll)

router.get("/statistics", customerController.statistics)

router.get("/:id", customerController.getOne)

router.post("/add", customerController.add)

router.put("/update/:id", customerController.update)

router.delete("/delete/:id", customerController.remove)

module.exports = router;