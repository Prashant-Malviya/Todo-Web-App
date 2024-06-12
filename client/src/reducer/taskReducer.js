function taskReducer(tasks, action) {
    console.log("taskreducer");
    switch (action.type) {
        case "ADD_TASK": {
            return [
                ...tasks,
                {
                    title: action.title,
                    description: action.description,
                    type: action.taskType,  // Include type
                    dueDate: action.dueDate,  // Include due date
                    completed: false,
                    createdAt: new Date().toISOString()  // Optional timestamp
                }
            ];
        }
        case "SET_TASK": {
            return action.payload;
        }
        case "REMOVE_TASK": {
            return tasks.filter((task, index) => index !== action.id);
        }
        case "MARK_DONE": {
            return tasks.map((task, index) => {
                if (index === action.id) {
                    return {
                        ...task,
                        completed: !task.completed
                    };
                }
                return task;
            });
        }

        case "EDIT_TASK": {
            return tasks.map((task, index) => {
                if (index === action.id) {
                    return {
                        ...task,
                        title: action.task.title,
                        description: action.task.description,
                        type: action.task.type,
                        dueDate: action.task.dueDate
                    };
                }
                return task;
            });
        }

        // case "EDIT_TASK": {
        //     return tasks.map((task, index) => {
        //         if (index === action.id) {
        //             return {
        //                 ...task,
        //                 ...action.task
        //             };
        //         }
        //         return task;
        //     });
        // }

        default: {
            throw new Error("Unknown action: " + action.type);
        }
    }
}

export default taskReducer;
