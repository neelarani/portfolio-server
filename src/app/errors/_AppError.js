export class AppError extends Error {
    status;
    constructor(status, message, stack = '') {
        super(message);
        this.status = status;
        this.name = 'AppError';
        this.status = status;
        if (stack) {
            this.stack = stack;
        }
        else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
