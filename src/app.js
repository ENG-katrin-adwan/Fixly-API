require("dotenv").config();

const express = require("express");
const app = express();

const morgan = require("morgan");

const connectDb = require("./utils/connectDb");

app.use(express.json());
app.use(morgan("dev"));

app.use("/api/v1/customer", require("./Routes/customer.route"));
app.use("/api/v1/maintenanceRequest", require("./Routes/maintenanceRequest.route"));
app.use("/api/v1/review", require("./Routes/review.route"));
app.use("/api/v1/service", require("./Routes/service.route"));

connectDb(app);
























