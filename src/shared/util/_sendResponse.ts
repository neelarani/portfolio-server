import type { Response } from 'express';

interface TResponse<T> {
  status: number;
  success: boolean;
  message: string;
  data?: T;
}

export const sendResponse = <T>(res: Response, info: TResponse<T>) => {
  res.status(info.status).json({
    status: info.status,
    success: info.success,
    message: info.message,
    data: info.data,
  });
};
