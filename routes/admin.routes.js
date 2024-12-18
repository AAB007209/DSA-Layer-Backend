const router = require("express").Router();
const { createProblem } = require("../controllers/admin.controllers");

// Create a new problem
router.post("/create-problem", createProblem);

module.exports = router;

