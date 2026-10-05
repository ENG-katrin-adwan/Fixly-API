const mongoose = require("mongoose");

const maintenanceRequestSchema = new mongoose.Schema({
title: String,
description: String,
status: {
    type: String,
    enum: ["pending", "in-progress", "completed"],
    default: "pending"
},
priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium"
},
requestedDate: String
});

const MaintenanceRequest = mongoose.model("MaintenanceRequest", maintenanceRequestSchema)

module.exports = MaintenanceRequest