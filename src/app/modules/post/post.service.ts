import { prisma } from '@/config';
import { fileUploader } from '@/shared/helpers';
import type { Post } from '@prisma/client';

export const createPost = async (payload: Post, file?: Express.Multer.File) => {
  if (file) {
    const uploadResult = await fileUploader.uploadToCloudinary(file);
    payload.thumbnail = uploadResult?.secure_url as string;
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

export const getSinglePost = async (id: number) => {
  const posts = await prisma.post.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return posts;
};

export const updatePost = async (id: number, payload: any) => {
  const post = await prisma.post.update({
    where: { id },
    data: payload,
  });

  return post;
};

export const deletePost = async (id: number) => {
  const result = await prisma.post.delete({
    where: {
      id,
    },
  });
};
