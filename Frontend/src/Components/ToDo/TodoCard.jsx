import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { HiPencilAlt } from "react-icons/hi";

function TodoCard({ title, description }) {
  return (
    <div className="p-2 border-2 min-h-28">
      <div>
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="text-justify-inter-word">
          {description.split("", 100)}...
        </p>
      </div>
      <div className="flex justify-around m-2">
        <div className="flex justify-center items-center">
          <HiPencilAlt className="lg:text-xl md:text-xl text-lg text-blue-700  cursor-pointer hover:scale-125 transition-transform" />
        </div>
        <div className="flex justify-center items-center">
          <AiFillDelete className="lg:text-xl md:text-xl text-lg text-red-600 cursor-pointer hover:shadow-2xl hover:shadow-slate-800 hover:scale-125 transition-transform"/>
        </div>
      </div>
    </div>
  );
}

export default TodoCard;
