"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultError = void 0;
const defaultError = (err, req, res, next) => {
    var _a;
    console.error(err);
    const status = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    res.status(status).json({
        success: false,
        status,
        message,
        error: process.env.NODE_ENV === 'development' ? err : undefined,
        stack: (_a = err.stack) === null || _a === void 0 ? void 0 : _a.split('\n'),
    });
};
exports.defaultError = defaultError;
