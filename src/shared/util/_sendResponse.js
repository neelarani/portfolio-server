export const sendResponse = (res, info) => {
    res.status(info.status).json({
        status: info.status,
        success: info.success,
        message: info.message,
        data: info.data,
    });
};
