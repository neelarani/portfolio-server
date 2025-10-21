"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePostSchema = exports.postSchema = void 0;
const zod_1 = require("zod");
exports.postSchema = zod_1.z.object({
    title: zod_1.z.string().min(5, 'Title must be at least 5 characters long'),
    content: zod_1.z.string().min(10, 'Content must be at least 10 characters long'),
    thumbnail: zod_1.z.string().url('Thumbnail must be a valid URL').optional(),
    isFeatured: zod_1.z.boolean().default(false),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    views: zod_1.z.number().optional(),
});
exports.updatePostSchema = zod_1.z.object({
    title: zod_1.z
        .string()
        .min(5, 'Title must be at least 5 characters long')
        .optional(),
    content: zod_1.z
        .string()
        .min(10, 'Content must be at least 10 characters long')
        .optional(),
    thumbnail: zod_1.z.string().url('Thumbnail must be a valid URL').optional(),
    isFeatured: zod_1.z.boolean().optional(),
    tags: zod_1.z.array(zod_1.z.string()).optional(),
    views: zod_1.z.number().optional(),
});
