import { createParamDecorator } from '@nestjs/common';
export const SessionUser = createParamDecorator((data, req) => {
  try {
    return req.session.passport.user;
  } catch (e) {
    return null;
  }
});
