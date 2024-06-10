import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";
import { selectItmId } from "../../store/slices/itemIdSlice";
import { useDispatch } from "react-redux";

function TodoCard({ title, description, type, dueDate, id }) {
  const dispatch = useDispatch();

  return (
    <div className="p-2 border-2 min-h-28">
      <div>
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-justify-inter-word">{description.substring(0, 100)}...</p>
        <p>Type: {type}</p>
        <p>Due Date: {dueDate}</p>
      </div>
      <div className="flex justify-around m-2">
        <div className="flex justify-center items-center">
          <HiPencilAlt className="lg:text-xl md:text-xl text-lg text-blue-700 cursor-pointer hover:scale-125 transition-transform" />
        </div>
        <div
          className="flex justify-center items-center"
          onClick={() => dispatch(selectItmId(id))}
        >
          <AiFillDelete className="lg:text-xl md:text-xl text-lg text-red-600 cursor-pointer hover:shadow-2xl hover:shadow-slate-800 hover:scale-125 transition-transform" />
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
