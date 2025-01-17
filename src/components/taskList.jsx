import React from "react";

function TaskList({ tasks, onRemoveTask }) {
  return (
    <ul className="list-disc w-full">
      {tasks.map((task, index) => (
        <li
          key={index}
          className="p-2 border-b border-gray-300 flex justify-between items-center"
        >
          <span>
            {index + 1}. {task}
          </span>
          <button
            onClick={() => onRemoveTask(index)}
            className="btn btn-circle btn-outline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
