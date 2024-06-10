import React from "react";
import { Modal } from "react-bootstrap";
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai";

function AddTodoModal({
  show,
  handleClose,
  inputs,
  handleChange,
  handleSubmit,
}) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      className="flex items-center justify-center"
    >
      <div className="bg-gradient-to-r from-purple-400  to-amber-200 p-6 rounded-lg shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-bold text-white flex items-center">
            <AiOutlinePlus className="mr-2" />{" "}
            <span className="text-black">Add Todo</span>
          </h2>
          <AiOutlineClose
            className="text-2xl text-white cursor-pointer hover:text-red-500"
            onClick={handleClose}
          />
        </div>
        <div className="mt-4">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name="title"
            value={inputs.title}
          />
          <textarea
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Description"
            onChange={handleChange}
            name="description"
            value={inputs.description}
          />
          <select
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name="type"
            value={inputs.type}
          >
            <option value="">Select Type</option>
            <option value="Official">Official</option>
            <option value="Personal">Personal</option>
            <option value="Hobby">Hobby</option>
          </select>
          <input
            type="date"
            className="w-full p-2 mb-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            name="dueDate"
            value={inputs.dueDate}
          />
        </div>
        <div className="flex justify-end mt-4 space-x-2">
          <button
            className="flex items-center bg-blue-500 text-white py-2 px-3 rounded-md hover:bg-blue-600 transition-colors font-bold"
            onClick={handleSubmit}
          >
            <AiOutlinePlus className="mr-1" /> Add Todo
          </button>
          <button
            className="flex items-center bg-gray-500 text-white py-2 px-3 rounded-md hover:bg-gray-600 transition-colors mr-2 font-bold"
            onClick={handleClose}
          >
            <AiOutlineClose className="mr-1" /> Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}

export default AddTodoModal;
