const Problem = require("../models/problem.models");

const createProblem = async (req, res) => {
    try {
        const { title, description, difficulty, category, tags, link, solution } = req.body;

        const newProblem = new Problem({
            title,
            description,
            difficulty,
            category,
            tags,
            link,
            solution,
        });

        await newProblem.save();
        res.status(201).json({ message: "Problem created successfully", problem: newProblem });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { createProblem };