const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database Connection Successfull");
    } catch (error) {
        console.log(`Connecting to Database Failed! Error : ${error}`);
    }
}

module.exports = connectDB;