import { combineReducers } from "redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import alertReducer from "./alert/alertReducer";
import categoryReducer from "./category/category.reducer";

const persistConfig = {
	key: "root",
	storage,
	whitelist: [],
};

const rootReducer = combineReducers({
	alert: alertReducer,
	categoryReducer: categoryReducer,
});

export default persistReducer(persistConfig, rootReducer);
