import { createStore } from "redux";
import TodoReducer from "./TodoList/TodoReducer";


export const store = createStore(TodoReducer)