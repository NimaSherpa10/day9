import React, { useState } from "react";

function TaskInput({ onAddTask }) {
  const [taskInput, setTaskInput] = useState("");

  const handleInputChange = (e) => {
    taskInput = e.target.value;
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== "") {
      onAddTask(taskInput);
      setTaskInput(""); // Clear the input
    }
  };

  return (
    <div className="flex w-full mb-4">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Enter a new task"
        className="input input-bordered input-accent w-full max-w-xs"
      />
      <button
        onClick={handleAddTask}
        className="btn btn-outline btn-accent ml-8"
      >
        Add Task
      </button>
    </div>
  );
}

export default TaskInput;
