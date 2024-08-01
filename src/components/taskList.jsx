import React from "react";

function TaskList({ tasks }) {
  return (
    <ul className="list-disc w-full">
      {tasks.map((task, index) => (
        <li key={index} className="p-2 border-b border-gray-300">
          {task}
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
