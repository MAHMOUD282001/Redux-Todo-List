import { ADD_TODO_ITEM, REMOVE_ALL, REMOVE_TODO_ITEM, UPDATE_TODO_ITEM } from "./ActionTypes"


export const addTodoListItem = (payload)=>{
    return{
        type: ADD_TODO_ITEM,
        payload: payload
    }
}

export const editTodoListItem = (payload)=>{
    return{
        type: UPDATE_TODO_ITEM,
        payload: payload
    }
}


export const removeTodoListItem = (payload)=>{
    return{
        type: REMOVE_TODO_ITEM,
        payload: payload
    }
}


export const removeAllTodoListItems = ()=>{
    return{
        type: REMOVE_ALL,
    }
}