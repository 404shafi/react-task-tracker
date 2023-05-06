import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30pm",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "Feb 6th at 1:30pm",
      reminder: true,
    },
    {
      id: 3,
      text: "Food Shopping",
      day: "Feb 5th at 2:30pm",
      reminder: false,
    },
  ]);
  const handleClick = () => {
    if (wantToAddTask) {
      setWantToAddTask(false);
    } else {
      setWantToAddTask(true);
    }
  };

  const [wantToAddTask, setWantToAddTask] = useState(false);

  const deleteTask = (id) => {
    console.log(id);
    const rest = tasks.filter((task) => task.id !== id);
    setTasks(rest);
  };

  const setReminder = (id) => {
    console.log(id);
    const newTasks = tasks.map((task) =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    );
    setTasks(newTasks);
  };

  const saveTask = (addedtask) => {
    const id = tasks.length + 1;
    const newTask = [...tasks, { ...addedtask, id: id }];
    setTasks(newTask);
  };
  return (
    <div className="container">
      <Header
        title="Task Tracker"
        handleClick={handleClick}
        wantToAddTask={wantToAddTask}
      ></Header>
      {wantToAddTask && <AddTask saveTask={saveTask}></AddTask>}
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          deleteTask={deleteTask}
          setReminder={setReminder}
        ></Tasks>
      ) : (
        "No task"
      )}
    </div>
  );
}

export default App;
