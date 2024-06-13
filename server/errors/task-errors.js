class TaskNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = "TaskNotFoundError";
        this.statusCode = 404;
    }
}

class TaskValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "TaskValidationError";
        this.statusCode = 400;
    }
}

export { TaskNotFoundError, TaskValidationError };
