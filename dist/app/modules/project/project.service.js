"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.getSingleProject = exports.getAllProject = exports.createProject = void 0;
const config_1 = require("../../../config");
const helpers_1 = require("../../../shared/helpers");
const createProject = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    if (file) {
        const uploadResult = yield helpers_1.fileUploader.uploadToCloudinary(file);
        payload.thumbnail = uploadResult === null || uploadResult === void 0 ? void 0 : uploadResult.secure_url;
    }
    const project = yield config_1.prisma.project.create({
        data: {
            title: payload.title,
            description: payload.description,
            thumbnail: payload.thumbnail,
            githubUrl: payload.githubUrl,
            liveLink: payload.liveLink,
            tags: payload.tags,
        },
    });
    return project;
});
exports.createProject = createProject;
const getAllProject = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.project.findMany({});
    return result;
});
exports.getAllProject = getAllProject;
const getSingleProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.project.findUniqueOrThrow({
        where: {
            id,
        },
    });
    return result;
});
exports.getSingleProject = getSingleProject;
const updateProject = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.project.update({
        where: {
            id,
        },
        data: payload,
    });
    return result;
});
exports.updateProject = updateProject;
const deleteProject = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.project.delete({
        where: {
            id,
        },
    });
    return result;
});
exports.deleteProject = deleteProject;
