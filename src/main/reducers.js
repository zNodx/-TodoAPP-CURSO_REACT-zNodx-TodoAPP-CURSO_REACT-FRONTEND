import { combineReducers } from "redux";
import todoReducer from "../todo/todoReducer";
import React from "react";

const rootReducer =  combineReducers({
    todo: todoReducer
})


export default rootReducer