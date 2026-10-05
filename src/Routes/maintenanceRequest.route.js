const express = require("express");
const router = express.Router();

const maintenanceRequestController = require("../Controllers/maintenanceRequest.controller");

router.get("/", maintenanceRequestController.getAll)

router.get("/statistics", maintenanceRequestController.statistics)

router.get("/:id", maintenanceRequestController.getOne)

router.post("/add", maintenanceRequestController.add)

router.put("/update/:id", maintenanceRequestController.update)

router.delete("/delete/:id", maintenanceRequestController.remove)

module.exports = router;