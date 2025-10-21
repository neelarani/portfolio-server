import { catchAsync, HTTP_CODE, sendResponse } from '@/shared';
import * as service from '@/app/modules/project/project.service';
export const createProject = catchAsync(async (req, res) => {
    const payload = req.body;
    const project = await service.createProject(payload, req.file);
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.CREATED,
        message: 'Project added successFully!',
        data: project,
    });
});
export const getAllProject = catchAsync(async (req, res) => {
    const project = await service.getAllProject();
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.OK,
        message: 'Project Retreive successFully!',
        data: project,
    });
});
export const getSingleProject = catchAsync(async (req, res) => {
    const id = Number(req.params.id);
    const project = await service.getSingleProject(id);
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.OK,
        message: 'Project Retreive successFully!',
        data: project,
    });
});
export const updateProject = catchAsync(async (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;
    const project = await service.updateProject(id, data);
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.OK,
        message: 'Project Updated successFully!',
        data: project,
    });
});
export const deleteProject = catchAsync(async (req, res) => {
    const id = Number(req.params.id);
    const project = await service.deleteProject(id);
    sendResponse(res, {
        success: true,
        status: HTTP_CODE.OK,
        message: 'Project Deleted successFully!',
        data: project,
    });
});
