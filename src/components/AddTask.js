import React, { useState } from "react";

const AddTask = ({ saveTask }) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false);

  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleDay = (e) => {
    setDay(e.target.value);
  };
  const handleReminder = (e) => {
    setReminder(e.target.checked);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask({ text, day, reminder });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={handleText}
        />
      </div>
      <div>
        <label>Day & Time</label>
        <input
          type="text"
          placeholder="Add Day & Time"
          value={day}
          onChange={handleDay}
        />
      </div>
      <div className="reminder-box">
        <label>Set Reminder</label>
        <input type="checkbox" checked={reminder} onChange={handleReminder} />
      </div>
      <input type="submit" value="Save Task" />
    </form>
  );
};

export default AddTask;
