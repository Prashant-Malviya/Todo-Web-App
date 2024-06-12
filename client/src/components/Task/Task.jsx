import React, { useState, useContext } from "react";
import moment from "moment";
import "./task.css";
import TaskContext from "../../context/TaskContext";
import DeleteIcon from "@mui/icons-material/Delete";
import EditTaskModal from "../EditTaskModal/EditTaskModal";
import { MdEdit } from "react-icons/md";

function Task({ task, id }) {
  const { dispatch } = useContext(TaskContext);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_TASK",
      id,
    });
  };

  const handleMarkDone = (e) => {
    dispatch({
      type: "MARK_DONE",
      id,
    });
  };

  return (
    <div className="bg-slate-300 py-4 rounded-lg shadow-md flex items-center justify-center gap-2 mb-3 p-3">
      <div className="mark-done">
        <input
          type="checkbox"
          className="checkbox"
          onChange={handleMarkDone}
          checked={task.completed}
        />
      </div>
      <div className="task-info text-slate-900 text-sm w-10/12">
        <h4 className="task-title text-lg capitalize">{task.title}</h4>
        <p className="task-description">{task.description}</p>
        <p className="task-type capitalize">
          <strong>Type: </strong>
          {task.type}
        </p>
        <p className="task-dueDate">
          <strong>Due Date: </strong>
          {moment(task.dueDate).format("LL")}
        </p>
        <div className="italic opacity-60">
          {task?.createdAt ? (
            <p>{moment(task.createdAt).fromNow()}</p>
          ) : (
            <p>just now</p>
          )}
        </div>
      </div>
      <div className="flex flex-col items-center space-y-4">
        <button
          className="font-bold text-blue-700 text-2xl p-1"
          onClick={() => setShowEditModal(true)}
        >
          <MdEdit />
        </button>
        <DeleteIcon
          style={{ fontSize: 30, cursor: "pointer" }}
          size="large"
          onClick={handleRemove}
          className="remove-task-btn bg-amber-200 rounded-full border-2 shadow-2xl border-white p-1 text-red-700 text-2xl m-2"
        />
      </div>
      {task && (
        <EditTaskModal
          task={task}
          id={id}
          show={showEditModal}
          onHide={() => setShowEditModal(false)}
        />
      )}
    </div>
  );
}

export default Task;
