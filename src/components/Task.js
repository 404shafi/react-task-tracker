import React from "react";

const Task = (props) => {
  const { text, day, reminder, id } = props.task;
  return (
    <div
      className={`task ${reminder ? "reminder" : ""}`}
      onDoubleClick={(e) => props.setReminder(id)}
    >
      <h2>{text}</h2>
      <p>{day}</p>
      <p>Id: {id}</p>
      <button className="deleteTask" onClick={() => props.deleteTask(id)}>
        X
      </button>
    </div>
  );
};

export default Task;
