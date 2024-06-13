class AuthError extends Error {
    constructor(message) {
        super(message);
        this.name = "AuthError";
        this.statusCode = 401;
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
        this.statusCode = 400;
    }
}

export { AuthError, ValidationError };
