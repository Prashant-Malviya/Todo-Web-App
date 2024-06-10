import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { selectItmId } from "../../store/slices/itemIdSlice";
import toast from "react-hot-toast";
import TodoEditModal from "./Modal/ToDoEditModal";

function TodoCard({ title, description, type, dueDate, id }) {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState({ title, description, type, dueDate });

  const handleEditSave = (updatedTodo) => {
    setEditedTodo(updatedTodo);
    setIsEditing(false);
    toast.success("Todo item edited successfully");
  };

  const handleDelete = () => {
    // Delete logic
    dispatch(selectItmId(id));
  };

  return (
    <>
      <div className="p-4 bg-gradient-to-r from-blue-100 to-blue-300 rounded-lg shadow-md transform transition-all hover:scale-105 hover:shadow-lg">
        <div>
          <h4 className="font-bold text-xl mb-2">{editedTodo.title}</h4>
          <p className="text-justify mb-2">{editedTodo.description.substring(0, 100)}...</p>
          <p className="mb-1"><strong>Type:</strong> {editedTodo.type}</p>
          <p className="mb-2"><strong>Due Date:</strong> {editedTodo.dueDate}</p>
        </div>
        <div className="flex justify-around mt-4">
          <div className="flex justify-center items-center">
            <HiPencilAlt
              onClick={() => setIsEditing(true)}
              className="text-2xl text-blue-700 cursor-pointer hover:scale-125 transition-transform"
            />
          </div>
          <div
            className="flex justify-center items-center"
            onClick={handleDelete}
          >
            <AiFillDelete className="text-2xl text-red-600 cursor-pointer hover:shadow-2xl hover:scale-125 transition-transform" />
          </div>
        </div>
      </div>
      <TodoEditModal
        show={isEditing}
        handleClose={() => setIsEditing(false)}
        todo={editedTodo}
        handleSave={handleEditSave}
      />
    </>
  );
}

export default TodoCard;
