import { combineReducers } from "redux";
import { books } from "./books";
import { form } from "./form";
import { card } from "./card";

const rootReducer = combineReducers({
    books,
    form,
    card
})
export default rootReducer;