import React from "react";
import Task from "./Task";

const Tasks = ({ tasks, deleteTask, setReminder }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          setReminder={setReminder}
        ></Task>
      ))}
    </div>
  );
};

export default Tasks;
