import React from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineClose, AiOutlineSave } from "react-icons/ai";
import { BsPencil } from "react-icons/bs";

function TodoEditModal({ show, handleClose, todo, handleSave }) {
  const [title, setTitle] = React.useState(todo.title);
  const [description, setDescription] = React.useState(todo.description);
  const [type, setType] = React.useState(todo.type);
  const [dueDate, setDueDate] = React.useState(todo.dueDate);

  const handleSaveClick = () => {
    handleSave({ ...todo, title, description, type, dueDate });
  };

  return (
    <Modal show={show} onHide={handleClose} className="flex items-center justify-center">
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-white flex items-center">
            <BsPencil className="mr-2" /> Edit Todo
          </h2>
          <AiOutlineClose className="text-2xl text-white cursor-pointer hover:text-red-500" onClick={handleClose} />
        </div>
        <div className="mt-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control mb-2 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Title"
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control mb-2 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Description"
          />
          <input
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="form-control mb-2 p-2 border border-gray-300 rounded-md w-full"
            placeholder="Type"
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="form-control mb-2 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="flex items-center bg-gray-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition-colors mr-2"
            onClick={handleClose}
          >
            <AiOutlineClose className="mr-1" /> Cancel
          </button>
          <button
            className="flex items-center bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
            onClick={handleSaveClick}
          >
            <AiOutlineSave className="mr-1" /> Save
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default TodoEditModal;
