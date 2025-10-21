import { prisma } from '@/config';
import type { ProjectInput } from './project.interface';
import { fileUploader } from '@/shared/helpers';

export const createProject = async (
  payload: ProjectInput,
  file?: Express.Multer.File
) => {
  if (file) {
    const uploadResult = await fileUploader.uploadToCloudinary(file);
    payload.thumbnail = uploadResult?.secure_url as string;
  }

  const project = await prisma.project.create({
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
};

export const getAllProject = async () => {
  const result = await prisma.project.findMany({});
  return result;
};

export const getSingleProject = async (id: number) => {
  const result = await prisma.project.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return result;
};

export const updateProject = async (
  id: number,
  payload: Partial<ProjectInput>
) => {
  const result = await prisma.project.update({
    where: {
      id,
    },
    data: payload,
  });

  return result;
};

export const deleteProject = async (id: number) => {
  const result = await prisma.project.delete({
    where: {
      id,
    },
  });
  return result;
};
