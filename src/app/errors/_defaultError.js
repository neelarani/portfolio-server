export const defaultError = (err, req, res, next) => {
    console.error(err);
    const status = err.statusCode || 500;
    const message = err.message || 'Something went wrong';
    res.status(status).json({
        success: false,
        status,
        message,
        error: process.env.NODE_ENV === 'development' ? err : undefined,
        stack: err.stack?.split('\n'),
    });
};
