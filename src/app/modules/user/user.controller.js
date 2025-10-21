import { catchAsync, HTTP_CODE, sendResponse } from '@/shared';
import * as service from './user.service';
export const getUser = catchAsync(async (req, res) => {
    const result = await service.getUser();
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.OK,
        message: 'User retrieve successfully!',
        data: result,
    });
});
