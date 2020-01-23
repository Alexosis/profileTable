import {tableReducer} from "./table/reducers";
import {combineReducers} from "redux";

export default combineReducers({
    table: tableReducer,
});