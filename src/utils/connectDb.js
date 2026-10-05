const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_URL;
const PORT =process.env.PORT;

function connectDb(app) {
    return mongoose.connect(MONGO_URL)
    .then( () => {
        console.log("Connected To DataBase Successfully");

        app.listen(PORT, () => {
            console.log(`Server is Running on: http://localhost:${PORT}`)
        })
    });
}

module.exports = connectDb