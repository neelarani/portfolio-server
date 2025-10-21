import { z } from 'zod';

export const postSchema = z.object({
  title: z.string().min(5, 'Title must be at least 5 characters long'),
  content: z.string().min(10, 'Content must be at least 10 characters long'),
  thumbnail: z.string().url('Thumbnail must be a valid URL').optional(),
  isFeatured: z.boolean().default(false),
  tags: z.array(z.string()).optional(),
  views: z.number().optional(),
});

export const updatePostSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters long')
    .optional(),
  content: z
    .string()
    .min(10, 'Content must be at least 10 characters long')
    .optional(),
  thumbnail: z.string().url('Thumbnail must be a valid URL').optional(),
  isFeatured: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  views: z.number().optional(),
});
