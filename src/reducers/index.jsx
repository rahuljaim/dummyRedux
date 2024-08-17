import { combineReducers } from "@reduxjs/toolkit";
import incrementReducer from "./incrementReducer";

export default combineReducers({
    increment: incrementReducer,
})