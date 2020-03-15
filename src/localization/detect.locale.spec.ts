import { Logger } from '@nestjs/common';
import DetectLocale from './detect.locale';

// Disable the logging
Logger.overrideLogger(true);

describe('Localization > DetectLocale', () => {
  it('Should detect language from session', () => {
    let request: any = {};
    request.session = {
      passport: {
        user: {
          _json: {
            language: 'nl-NL',
          },
        },
      },
    };
    let result = DetectLocale(request);
    expect(result).toEqual('nl-NL');
  });

  it('Should ignore language from session if it is not supported', () => {
    let request: any = {};
    request.session = {
      passport: {
        user: {
          _json: {
            language: 'en-GB',
          },
        },
      },
    };
    let result = DetectLocale(request);
    expect(result).toEqual('en-US');
  });

  it('Should detect language from query parameter', () => {
    let request: any = {
      query: { language: 'nl-NL' },
    };
    let result = DetectLocale(request);
    expect(result).toEqual('nl-NL');
  });

  it('Should detect language from request header', () => {
    let request: any = {};
    request.query = {};
    request.headers = [];
    request.headers['accept-language'] = 'nl-NL';

    let result = DetectLocale(request);
    expect(result).toEqual('nl-NL');
  });
});
