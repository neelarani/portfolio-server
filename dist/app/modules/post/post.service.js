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
exports.deletePost = exports.updatePost = exports.getSinglePost = exports.getAllPost = exports.createPost = void 0;
const config_1 = require("../../../config");
const helpers_1 = require("../../../shared/helpers");
const createPost = (payload, file) => __awaiter(void 0, void 0, void 0, function* () {
    if (file) {
        const uploadResult = yield helpers_1.fileUploader.uploadToCloudinary(file);
        payload.thumbnail = uploadResult === null || uploadResult === void 0 ? void 0 : uploadResult.secure_url;
    }
    const result = yield config_1.prisma.post.create({
        data: {
            title: payload.title,
            content: payload.content,
            thumbnail: payload.thumbnail,
            tags: payload.tags,
        },
    });
    return result;
});
exports.createPost = createPost;
const getAllPost = () => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield config_1.prisma.post.findMany();
    return posts;
});
exports.getAllPost = getAllPost;
const getSinglePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const posts = yield config_1.prisma.post.findUniqueOrThrow({
        where: {
            id,
        },
    });
    return posts;
});
exports.getSinglePost = getSinglePost;
const updatePost = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const post = yield config_1.prisma.post.update({
        where: { id },
        data: payload,
    });
    return post;
});
exports.updatePost = updatePost;
const deletePost = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield config_1.prisma.post.delete({
        where: {
            id,
        },
    });
});
exports.deletePost = deletePost;
