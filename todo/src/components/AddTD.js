import React, { useState, useReducer } from "react";
import { reducer, toDos } from "../reducers/reducer";
import TDList from "./TDList";

const AddToDo = props => {
  const [toDo, setToDo] = useState();
  const [toDoItemsState, dispatch] = useReducer(reducer, toDos);

  const handleChanges = e => {
    setToDo(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (toDo) {
      dispatch({ type: "ADD_TODO", payload: toDo });
      setToDo("");
    }
  };

  const handleClear = e => {
    e.preventDefault();
    dispatch({ type: "CLEAR_TODOS" });
    let completed = document.querySelectorAll(".complete");
    completed.forEach(item => item.remove("complete"));
  };

  const toggleCompleted = e => {
    dispatch({ type: "TOGGLE_TODO", payload: e.target.innerHTML });
    e.target.classList.contains("complete")
      ? e.target.classList.remove("complete")
      : e.target.classList.add("complete");
  };

  return (
    <div>
      <h1>Welcome to your TO-DO L I S T</h1>

      <form>
        <label htmlFor="toDo">New To-Do: </label>
        <input type="text" name="toDo" value={toDo} onChange={handleChanges} />
        <input type="submit" value="Add Item" onClick={handleSubmit} />
        <input type="submit" value="Remove Completed" onClick={handleClear} />
      </form>
      <TDList toDos={toDoItemsState} toggleCompleted={toggleCompleted} />
    </div>
  );
};
export default AddToDo;
