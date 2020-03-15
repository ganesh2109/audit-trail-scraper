import 'dotenv/config';
import { Logger } from '@nestjs/common';
import PageResponse from './page.response';

// Disable the logging
Logger.overrideLogger(true);

describe('Workers > Utils > PageResponse', () => {
  it('Should create response with no validation errors', () => {
    let response = new PageResponse().withTitle('title').get();
    expect(response.error).toBe(false);
    expect(response.title).toBe('title');
  });

  it('Should create response with with validation errors', () => {
    let response = new PageResponse()
      .withTitle('title')
      .withValidation({
        error: true,
      })
      .get();
    expect(response.error).toBe(true);
  });

  it('Should create response with with validation messages converted', () => {
    let response = new PageResponse()
      .withTitle('title')
      .withValidation({
        error: true,
        results: [
          {
            error: true,
            message: '{{label}}',
          },
        ],
      })
      .get();
    expect(response.validation[0].message).toEqual('messages.label');
  });
});
