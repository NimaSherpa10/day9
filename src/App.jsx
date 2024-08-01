import React, { useState } from "react";
import TaskInput from "./components/taskInput";
import TaskList from "./components/taskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="h-screen flex flex-col items-center">
      <h1 className="text-3xl mt-8">To-Do List App</h1>
      <div className="flex-grow flex flex-col justify-center items-center w-full max-w-md">
        <TaskInput onAddTask={addTask} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}

export default App;
