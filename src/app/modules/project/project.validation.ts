import { z } from 'zod';

export const projectSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  description: z.string().min(10, 'Description must be at least 10 characters'),
  thumbnail: z.string().url('Thumbnail must be a valid URL').optional(),
  githubUrl: z.string().url('Invalid GitHub URL'),
  liveLink: z.string().url('Invalid Live URL'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
});

export const updateProjectSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters').optional(),
  description: z
    .string()
    .min(10, 'Description must be at least 10 characters')
    .optional(),
  thumbnail: z.string().url('Thumbnail must be a valid URL').optional(),
  githubUrl: z.string().url('Invalid GitHub URL').optional(),
  liveLink: z.string().url('Invalid Live URL').optional(),
  tags: z.array(z.string()).min(1, 'At least one tag is required').optional(),
});
