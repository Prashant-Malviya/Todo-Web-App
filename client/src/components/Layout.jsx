import React from "react";
import TaskIndicator from "./TaskIndicator";
import CreateTask from "./createTask/CreateTask";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="bg-gradient-to-tr from-amber-200 to-purple-200 min-h-screen relative top-10 pt-8">
      <div className="flex flex-col md:flex-row md:justify-between">
        <CreateTask />
        <div className="task-container w-auto mx-5 md:w-1/3 mt-3">
          <div className="outlet bg-gradient-to-br from-purple-300 via-gray-400 to-blue-600">
            <Outlet />
          </div>
          <div className="indicator">
            <TaskIndicator />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
