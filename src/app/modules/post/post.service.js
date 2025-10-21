import { prisma } from '@/config';
import { fileUploader } from '@/shared/helpers';
export const createPost = async (payload, file) => {
    if (file) {
        const uploadResult = await fileUploader.uploadToCloudinary(file);
        payload.thumbnail = uploadResult?.secure_url;
    }
    const result = await prisma.post.create({
        data: {
            title: payload.title,
            content: payload.content,
            thumbnail: payload.thumbnail,
            tags: payload.tags,
        },
    });
    return result;
};
export const getAllPost = async () => {
    const posts = await prisma.post.findMany();
    return posts;
};
export const getSinglePost = async (id) => {
    const posts = await prisma.post.findUniqueOrThrow({
        where: {
            id,
        },
    });
    return posts;
};
export const updatePost = async (id, payload) => {
    const post = await prisma.post.update({
        where: { id },
        data: payload,
    });
    return post;
};
export const deletePost = async (id) => {
    const result = await prisma.post.delete({
        where: {
            id,
        },
    });
};
