// Overdue.jsx
import React, { useContext } from 'react';
import moment from 'moment';
import Task from '../Task/Task';
import TaskContext from '../../context/TaskContext';

function Overdue() {
    const { tasks } = useContext(TaskContext);

    return (
        <div>
            {
                tasks.length !== 0 ? (
                    tasks.map((task, index) => {
                        const isOverdue = moment(task.dueDate).isBefore(moment(), 'day');
                        return (
                            isOverdue && (
                                <Task
                                    key={index}
                                    task={task}
                                    id={index}
                                />
                            )
                        );
                    })
                ) : (
                    <h1 className='font-bold text-center text-2xl'>No Task Found</h1>
                )
            }
        </div>
    );
}

export default Overdue;
