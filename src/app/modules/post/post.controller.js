import { catchAsync, HTTP_CODE, sendResponse } from '@/shared';
import * as service from './post.service';
export const createPost = catchAsync(async (req, res) => {
    const post = req.body;
    const result = await service.createPost(post, req.file);
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.OK,
        message: 'Post Created successfully!',
        data: result,
    });
});
export const getAllPost = catchAsync(async (req, res) => {
    const result = await service.getAllPost();
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.OK,
        message: 'Retrieve All Post successfully!',
        data: result,
    });
});
export const getSinglePost = catchAsync(async (req, res) => {
    const postId = Number(req.params.id);
    const result = await service.getSinglePost(postId);
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.OK,
        message: 'Post Retrieve successfully!',
        data: result,
    });
});
export const updatePost = catchAsync(async (req, res) => {
    const id = Number(req.params.id);
    const result = await service.updatePost(id, req.body);
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.OK,
        message: 'Post updated successfully',
        data: result,
    });
});
export const deletePost = catchAsync(async (req, res) => {
    const id = Number(req.params.id);
    const result = await service.deletePost(id);
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.OK,
        message: 'Post Deleted successfully!',
        data: result,
    });
});
