import { combineReducers } from "redux";
import langReducer from "./reducers/lang.reducer";



const rootReducer = combineReducers({
    lang: langReducer,
});

export default rootReducer;