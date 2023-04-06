import React, { useState } from "react";
import "./TodoList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faRemove } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodoListItem,
  editTodoListItem,
  removeAllTodoListItems,
  removeTodoListItem,
} from "../Redux/TodoList/TodoListActions";
library.add(faEdit, faRemove);

function TodoList() {
  let [itemValue, setItemValue] = useState("");

  let [editMode, setEditMode] = useState(false);

  let [editItemId, setEditItemId] = useState();

  let items = useSelector((state) => state.items);

  let dispatch = useDispatch();

  let addItem = () => {
    if (itemValue?.length !== 0) {
      dispatch(addTodoListItem({ id: items?.length + 1, item: itemValue }));
      setItemValue("");
    }
  };

  let editItem = (id) => {
    let editedItem = items?.find((item) => item?.id === id);
    setEditItemId(id);
    setItemValue(editedItem?.name);
  };

  let submitEditedItem = () => {
    dispatch(editTodoListItem({ id: editItemId, item: itemValue }));
    setEditMode(false);
    setItemValue("");
  };

  let removeItem = (id) => {
    dispatch(removeTodoListItem({ id: id }));
  };

  let removeAll = () => {
    dispatch(removeAllTodoListItems());
  };

  const handleChange = (e) => {
    if (e.key === " ") {
      e.preventDefault();
    } else {
      setItemValue(e.currentTarget.value.trim());
    }
  };

  return (
    <div className="todo-list">
      <h1>TodoList App</h1>
      <div className="add-item">
        <input type="text" value={itemValue} onChange={handleChange} />
        {editMode ? (
          <button onClick={submitEditedItem}>Edit</button>
        ) : (
          <button onClick={addItem}>Add</button>
        )}
      </div>

      {items?.length > 0 ? (
        items.map((item) => (
          <div className="item" key={item?.id}>
            <div className="item-name-part">
              <div>{item?.name}</div>
            </div>
            <div className="edit-remove-part">
              <div
                onClick={() => {
                  setEditMode(true);
                  editItem(item?.id);
                }}
              >
                <FontAwesomeIcon icon="edit" />
              </div>
              <div onClick={() => removeItem(item?.id)}>
                <FontAwesomeIcon icon="remove" />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="noItems">
          <p className="">There are No Items</p>
        </div>
      )}

      {items?.length > 0 ? (
        <button className="remove-all" onClick={removeAll}>
          Remove All
        </button>
      ) : (
        ""
      )}
    </div>
  );
}

export default TodoList;
