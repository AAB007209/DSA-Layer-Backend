const router = require("express").Router();
const Problem = require("../models/problem.models");

router.get("/get-all-problems", async (req, res) => {
    try {
        res.send(await Problem.find());
    } catch (error) {
        res.status(500).send({ message: `Something went wrong! Please Try again`, error });
    }
});

module.exports = router;