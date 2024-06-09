import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import TodoCard from "./TodoCard";

function ToDo() {
  const [showDescription, setShowDescription] = useState(false);

  const [Inputs, setInputs] = useState({ title: "", description: "" });

  const [todoItm, setTodoItm] = useState([]);

  //   const show = () => {
  //     setShowBody(true);
  //   };

  const change = (e) => {
    const { name, value } = e.target;
    setInputs({ ...Inputs, [name]: value });
  };

  const submit = () => {
    console.log(Inputs);
    setTodoItm([...todoItm, Inputs]);
    setInputs({ title: "", description: "" });
  };

  console.log("todoItm", todoItm);

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
            onChange={change}
            name="title"
            value={Inputs.title}
          />

          {showDescription && (
            <textarea
              type="text"
              className="w-full p-2 outline-none"
              placeholder="Description"
              onChange={change}
              name="description"
              value={Inputs.description}
            />
          )}
        </div>
        <div className="lg:w-96 md:w-96 w-72 flex justify-end my-2">
          <Button
            variant="outline-primary"
            className="font-bold px-3"
            onClick={submit}
          >
            Add
          </Button>
        </div>
      </div>

      <div className="todo-body mb-3">
        <div className="container-fluid ">
          <div className="row">
            
              {todoItm &&
                todoItm.map((item, index) => (
                  <div className="col-lg-3 col-10 mx-5 my-2" key={index}>
                    <TodoCard title={item.title} description={item.description}/>
                  </div>
                ))}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
