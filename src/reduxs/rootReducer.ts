import { combineReducers } from "redux";
import langReducer from "./reducers/lang.reducer";



const rootReducer = combineReducers({
    lang: langReducer,
    user: langReducer,
});

export default rootReducer;