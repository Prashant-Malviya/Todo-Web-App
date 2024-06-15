import React, { useContext } from 'react';
import Task from '../components/Task/Task';
import TaskContext from '../context/TaskContext';

function AllTask() {
    const { tasks } = useContext(TaskContext);
    return (
        <div>
            {
                (tasks.length !== 0) ? (
                    tasks.map((task, index) => {
                        return (
                            <Task
                                key={index}
                                task={task}
                                id={index}
                            />
                        )
                    })
                ) : (
                    <h1 className='font-bold text-center text-2xl'>No Task Found</h1>
                )
            }
        </div>
    );
}

export default AllTask;
