import {
	GET_CATEGORY,
	GET_SINGLE_CATEGORY,
	CREATE_QUESTION,
} from "./category.types";

const initialState = {
	category: [],
	markQuestion: [],
	loading: true,
};

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CATEGORY:
			return {
				...state,
				category: action.payload,
				loading: false,
			};
		case GET_SINGLE_CATEGORY:
			return {
				...state,
				details: action.payload,
				loading: false,
			};
		case CREATE_QUESTION:
			return {
				...state,
				loading: false,
				category: state.category.map((x) =>
					x._id === action.payload._id
						? { ...x, questions: x.questions.push(action.payload) }
						: x
				),
			};
		default:
			return state;
	}
};
export default categoryReducer;
