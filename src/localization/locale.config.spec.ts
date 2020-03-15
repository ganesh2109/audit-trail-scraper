import { Logger } from '@nestjs/common';
import { availableLocales } from './locale.config';

// Disable the logging
Logger.overrideLogger(true);

describe('Localization > LocaleConfig', () => {
  it('Should detect language from session', () => {
    expect(availableLocales).toEqual(['en-US', 'nl-NL']);
  });
});
