import * as service from '@/app/modules/auth/auth.service';

import { catchAsync, HTTP_CODE, sendResponse } from '@/shared';

export const login = catchAsync(async (req, res) => {
  const result = await service.login(req.body);

  const { accessToken, refreshToken, user } = result;

  res.cookie('accessToken', accessToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60,
  });

  res.cookie('refreshToken', refreshToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'none',
    maxAge: 1000 * 60 * 60 * 24 * 90,
  });

  sendResponse(res, {
    success: true,
    status: HTTP_CODE.CREATED,
    message: 'User Loggedin Successfully',
    data: {
      email: user?.email,
      name: user?.name,
      role: user?.role,
    },
  });
});

export const logout = catchAsync(async (req, res) => {
  res.clearCookie('accessToken', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 0,
  });
  res.clearCookie('refreshToken', {
    httpOnly: true,
    secure: true,
    sameSite: 'none',
    maxAge: 0,
  });
  sendResponse(res, {
    success: true,
    status: HTTP_CODE.OK,
    message: 'Logged Out',
    data: null,
  });
});
