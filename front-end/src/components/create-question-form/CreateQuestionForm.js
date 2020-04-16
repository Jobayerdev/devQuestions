import React, { useState } from "react";
import "./create-question-form.styles.css";
import CustomTitle from "../custom-title/CustomTitle";
import { createQuestion } from "../../redux/category/category.actions";
import { connect } from "react-redux";
import Alert from "../utils/Alert";

const CreateQuestionForm = ({ createQuestion, catId }) => {
	const [formData, setFormData] = useState(null);
	const onChangeHandler = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const onSubmitHandler = (e) => {
		createQuestion(catId.categoryId, { ...formData });
		e.preventDefault();
	};
	return (
		<div className="create-question-form py-5 mt-5">
			<div className="row">
				<div className="col-md-10 offset-1">
					<CustomTitle
						thin="Set new Question"
						tagline="Spread your knowledged"
						medium
					/>
					<form onSubmit={onSubmitHandler} className="mt-5">
						<Alert />
						<input
							type="email"
							name="email"
							placeholder="Email"
							onChange={onChangeHandler}
							required
						/>
						<input
							type="text"
							name="questionTitle"
							placeholder="Question Title"
							onChange={onChangeHandler}
							required
						/>
						<textarea
							placeholder="Answer in English"
							onChange={onChangeHandler}
							name="answer"
							id=""
							cols="30"
							rows="10"
							required></textarea>
						<input type="submit" value="Submit Question" />
					</form>
				</div>
			</div>
		</div>
	);
};

export default connect(null, { createQuestion })(CreateQuestionForm);
