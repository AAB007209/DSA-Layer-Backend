const express = require("express");
const connectDB = require("./config/database.config");
const adminRouter = require("./routes/admin.routes");
const userRouter = require("./routes/user.routes");
const cors = require("cors");

require("dotenv").config();

const app = express();
const PORT = 8000;

connectDB();

app.use(cors({
    origin: "http://localhost:5173", // If we don't mention this then it allows every domain star (*)
    // methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    optionsSuccessStatus: 200,
    credentials: true, // Explicitly tells that Cookies and Authentication allowed.
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/admin", adminRouter);
app.use("/user", userRouter);

app.listen(PORT, () => {
    console.log(`Server started at PORT: ${PORT}`);
})