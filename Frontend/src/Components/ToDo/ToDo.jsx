import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import TodoCard from "./TodoCard";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import AddTodoModal from "./Modal/AddTodoModal";

function ToDo() {
  const [showModal, setShowModal] = useState(false);
  const [inputs, setInputs] = useState({ title: "", description: "", type: "", dueDate: "" });
  const [todoItems, setTodoItems] = useState([]);
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  const handleSubmit = () => {
    if (inputs.title && inputs.description && inputs.type && inputs.dueDate) {
      setTodoItems([...todoItems, inputs]);
      setInputs({ title: "", description: "", type: "", dueDate: "" });
      setShowModal(false); // Close the modal
      toast.success("Todo item added successfully");
    }
  };

  const selectedId = useSelector((state) => state.itemId.itmId);

  const deleteSelectedItem = (id) => {
    const updatedItems = todoItems.filter((_, index) => index !== id);
    setTodoItems(updatedItems);
    toast.success("Todo item deleted successfully");
  };

  const handleDeleteConfirmation = (id) => {
    setSelectedItemId(id);
    setConfirmationVisible(true);
  };

  const handleDeleteConfirmed = () => {
    deleteSelectedItem(selectedItemId);
    setConfirmationVisible(false);
  };

  useEffect(() => {
    if (selectedId >= 0 && selectedId < todoItems.length) {
      handleDeleteConfirmation(selectedId);
    }
  }, [selectedId]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <div className="w-full max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-semibold mb-6 text-center">My Todo List</h1>
          <Button variant="primary" className="mb-4 w-full" onClick={() => setShowModal(true)}>
            Add Todo
          </Button>
        </div>
      </div>
      <div className="w-full max-w-4xl mx-auto mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {todoItems.map((item, index) => (
            <TodoCard
              key={index}
              title={item.title}
              description={item.description}
              type={item.type}
              dueDate={item.dueDate}
              id={index}
              onDelete={() => handleDeleteConfirmation(index)}
            />
          ))}
        </div>
      </div>
      <AddTodoModal
        show={showModal}
        handleClose={() => setShowModal(false)}
        inputs={inputs}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      {confirmationVisible && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-lg font-semibold mb-4">Are you sure you want to delete this todo item?</p>
            <div className="flex justify-end">
              <Button variant="danger" className="mr-2" onClick={handleDeleteConfirmed}>
                Yes
              </Button>
              <Button variant="secondary" onClick={() => setConfirmationVisible(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ToDo;
