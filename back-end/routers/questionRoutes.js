const express = require("express");
const router = express.Router();
const Category = require("../models/CategorySchema");

//Get all courses
router.get("/", async (req, res) => {
	try {
		const category = await Category.find();
		res.json(category);
	} catch (error) {
		console.log(error.message);
	}
});

//Created new Category
router.post("/", async (req, res) => {
	const { title, thumbnail, description } = req.body;
	try {
		const newCategory = new Category({
			title,
			thumbnail,
			description,
		});
		await newCategory.save();
		res.json(newCategory);
	} catch (e) {
		return res.status(404).json({ msg: e.message });
	}
});

// Create Question
router.put("/:categoryId", async (req, res) => {
	const { questionTitle, answer } = req.body;
	try {
		//Get course by id
		const category = await Category.findById(req.params.categoryId);
		//Create outline object and save into database
		const newQuestion = {
			questionTitle,
			answer,
			status: "approved",
		};
		category.questions.push(newQuestion);
		//Save
		category.save();
		//return course object
		res.json(newQuestion);
	} catch (e) {
		res.json({ msg: e.message });
	}
});

module.exports = router;
