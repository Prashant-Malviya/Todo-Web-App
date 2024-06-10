import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"; // Corrected import path
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";

function ToDo() {
  const [showDescription, setShowDescription] = useState(false);
  const [inputs, setInputs] = useState({ title: "", description: "", type: "", dueDate: "" });
  const [todoItems, setTodoItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    if (inputs.title && inputs.description && inputs.type && inputs.dueDate) {
      setTodoItems([...todoItems, inputs]);
      setInputs({ title: "", description: "", type: "", dueDate: "" });
      setShowDescription(false); // Reset description field visibility
    }
  };

  const selectedId = useSelector((state) => state.itemId.itmId);

  const deleteSelectedItem = (id) => {
    const updatedItems = todoItems.filter((_, index) => index !== id);
    setTodoItems(updatedItems);
  };

  useEffect(() => {
    if (selectedId >= 0 && selectedId < todoItems.length) {
      deleteSelectedItem(selectedId);
    }
  }, [selectedId]);

  return (
    <div className="w-[100%] min-h-screen max-h-auto">
      <div className="container flex flex-col justify-center items-center">
        <div className="flex flex-col lg:w-96 md:w-96 w-72 border-2 rounded-md mt-5 space-y-2 shadow-2xl">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 outline-none"
            onClick={() => {
              setShowDescription(true);
            }}
            onChange={handleChange}
            name="title"
            value={inputs.title}
          />
          {showDescription && (
            <>
              <textarea
                className="w-full p-2 outline-none"
                placeholder="Description"
                onChange={handleChange}
                name="description"
                value={inputs.description}
              />
              <select
                className="w-full p-2 outline-none"
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
                className="w-full p-2 outline-none"
                onChange={handleChange}
                name="dueDate"
                value={inputs.dueDate}
              />
            </>
          )}
        </div>
        <div className="lg:w-96 md:w-96 w-72 flex justify-end my-2">
          <Button
            variant="outline-primary"
            className="font-bold px-3"
            onClick={handleSubmit}
          >
            Add
          </Button>
        </div>
      </div>
      <div className="todo-body mb-3">
        <div className="container-fluid">
          <div className="row">
            {todoItems &&
              todoItems.map((item, index) => (
                <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                  <TodoCard
                    title={item.title}
                    description={item.description}
                    type={item.type}
                    dueDate={item.dueDate}
                    id={index}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
