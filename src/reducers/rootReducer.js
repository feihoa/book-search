import { combineReducers } from "redux";
import {books} from "./books";
import {form} from "./form";

const rootReducer = combineReducers({
    books,
    form
})
export default rootReducer;