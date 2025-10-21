"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const controller = __importStar(require("./post.controller"));
const validation = __importStar(require("./post.validation"));
const middlewares_1 = require("../../../app/middlewares");
const client_1 = require("@prisma/client");
const helpers_1 = require("../../../shared/helpers");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post('/', (0, middlewares_1.auth)(client_1.Role.ADMIN), helpers_1.fileUploader.upload.single('file'), (0, middlewares_1.validateRequest)(validation.postSchema), controller.createPost);
router.get('/', controller.getAllPost);
router.get('/:id', controller.getSinglePost);
router.patch('/:id', (0, middlewares_1.auth)(client_1.Role.ADMIN), (0, middlewares_1.validateRequest)(validation.updatePostSchema), controller.updatePost);
router.delete('/delete/:id', (0, middlewares_1.auth)(client_1.Role.ADMIN), controller.deletePost);
exports.default = router;
