"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectSchema = exports.projectSchema = void 0;
const zod_1 = require("zod");
exports.projectSchema = zod_1.z.object({
    title: zod_1.z.string().min(3, 'Title must be at least 3 characters'),
    description: zod_1.z.string().min(10, 'Description must be at least 10 characters'),
    thumbnail: zod_1.z.string().url('Thumbnail must be a valid URL').optional(),
    githubUrl: zod_1.z.string().url('Invalid GitHub URL'),
    liveLink: zod_1.z.string().url('Invalid Live URL'),
    tags: zod_1.z.array(zod_1.z.string()).min(1, 'At least one tag is required'),
});
exports.updateProjectSchema = zod_1.z.object({
    title: zod_1.z.string().min(3, 'Title must be at least 3 characters').optional(),
    description: zod_1.z
        .string()
        .min(10, 'Description must be at least 10 characters')
        .optional(),
    thumbnail: zod_1.z.string().url('Thumbnail must be a valid URL').optional(),
    githubUrl: zod_1.z.string().url('Invalid GitHub URL').optional(),
    liveLink: zod_1.z.string().url('Invalid Live URL').optional(),
    tags: zod_1.z.array(zod_1.z.string()).min(1, 'At least one tag is required').optional(),
});
