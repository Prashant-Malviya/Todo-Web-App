import React from "react";
import { NavLink } from "react-router-dom";

function TaskIndicator() {
  return (
    <div className="flex-grow">
      <nav>
        <ul className="flex gap-3 justify-between p-3 bg-gradient-to-br from-blue-400 via-green-300 to-purple-400 rounded-lg font-bold shadow-2xl">
          <li>
            <NavLink to="/">All Task</NavLink>
          </li>
          <li>
            <NavLink to="/active">Active</NavLink>
          </li>
          <li>
            <NavLink to="/completed">Completed</NavLink>
          </li>
          <li>
            <NavLink to="/overdue">Overdue</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default TaskIndicator;
