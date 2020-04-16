const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
	title: {
		type: String,
	},
	thumbnail: {
		type: String,
	},
	description: {
		type: String,
	},
	questions: [
		{
			questionTitle: {
				type: String,
			},
			answer: {
				type: String,
			},
			status: {
				type: String,
			},
			date: {
				type: Date,
				default: Date.now,
			},
		},
	],
	date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Category = mongoose.model("category", CategorySchema);
