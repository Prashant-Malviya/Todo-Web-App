import React, { useState, useContext, useEffect } from 'react';
import TaskContext from '../../context/task-context';
import moment from 'moment';
import CustomModal from './custome-modal';

function EditTaskModal({ task, id, show, onHide }) {
    const { dispatch } = useContext(TaskContext);
    const [inputs, setInputs] = useState({ 
        title: '', 
        description: '', 
        type: '', 
        dueDate: '' 
    });

    useEffect(() => {
        if (task) {
            setInputs({ 
                title: task.title || '', 
                description: task.description || '', 
                type: task.type || '', 
                dueDate: task.dueDate || '' 
            });
        }
    }, [task]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "EDIT_TASK",
            id,
            task: inputs
        });
        onHide();
    };

    return (
        <CustomModal show={show} onClose={onHide}>
            <h2 className="text-2xl mb-4">Edit Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Title</label>
                    <input 
                        type="text" 
                        name="title" 
                        value={inputs.title} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea 
                        name="description" 
                        value={inputs.description} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Type</label>
                    <input 
                        type="text" 
                        name="type" 
                        value={inputs.type} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg" 
                        required 
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Due Date</label>
                    <input 
                        type="date" 
                        name="dueDate" 
                        value={moment(inputs.dueDate).format('YYYY-MM-DD')} 
                        onChange={handleChange} 
                        className="w-full p-2 border rounded-lg" 
                        required 
                    />
                </div>
                <div className="flex justify-end">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Save Changes
                    </button>
                </div>
            </form>
        </CustomModal>
    );
}

export default EditTaskModal;
