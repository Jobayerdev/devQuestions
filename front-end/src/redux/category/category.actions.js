import {
	GET_CATEGORY,
	GET_SINGLE_CATEGORY,
	CREATE_QUESTION,
} from "./category.types";
import axios from "axios";
import { alertAction } from "../alert/alertAction";

export const getCategory = () => async (dispatch) => {
	try {
		const res = await axios.get(
			"https://front-end-interview-question.herokuapp.com/api/category"
		);
		dispatch({
			type: GET_CATEGORY,
			payload: res.data,
		});
	} catch (e) {
		dispatch(alertAction(e.message, "danger"));
	}
};

//Get Category by id
export const getCategoryById = (id) => async (dispatch) => {
	try {
		const res = await axios.get(
			`https://front-end-interview-question.herokuapp.com/api/category/${id.categoryId}`
		);
		dispatch({
			type: GET_SINGLE_CATEGORY,
			payload: res.data,
		});
	} catch (e) {
		dispatch(alertAction(e.message, "danger"));
	}
};
//CREATE_QUESTION
export const createQuestion = (id, { questionTitle, answer }) => async (
	dispatch
) => {
	const config = {
		headers: {
			"Content-Type": "application/json",
		},
	};
	const body = JSON.stringify({
		questionTitle,
		answer,
	});
	try {
		const res = await axios.put(
			`https://front-end-interview-question.herokuapp.com/api/category/${id}`,
			body,
			config
		);

		dispatch({
			type: CREATE_QUESTION,
			payload: res.data,
		});
		dispatch(
			alertAction(
				"Question Submitted. We will review it soon. Thank You",
				"Success"
			)
		);
	} catch (e) {
		console.log(e.message);
		dispatch(alertAction(e.message, "danger"));
	}
};
