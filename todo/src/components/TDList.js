import React from "react";

const TDList = props => {
  return (
    <div>
      {props.toDos.map((toDo, index) => {
        return (
          <h3 onClick={props.toggleCompleted} key={index}>
            {toDo.item}
          </h3>
        );
      })}
    </div>
  );
};

export default TDList;
