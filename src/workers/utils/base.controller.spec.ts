import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { BaseController } from './base.controller';

// Disable the logging
Logger.overrideLogger(true);

describe('Workers > Utils > BaseController', () => {
  it('Always return an instance of a page response', () => {
    let controller = new BaseController();
    expect(controller.respond()).not.toBeNull();
  });
});
