import { Logger } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { LocalizationService } from './localization.service';

// Disable the logging
Logger.overrideLogger(true);

describe('Localization > LocalizationService', () => {
  let service: LocalizationService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [LocalizationService],
    }).compile();

    service = module.get<LocalizationService>(LocalizationService);
  });

  it('Should provide available locales correctly', async () => {
    expect(service.getAvailableLocales()).toEqual(['en-US', 'nl-NL']);
  });

  it('Should label in correct locale correctly', async () => {
    expect(service.getLabel('title', null, 'nl-NL')).toEqual('Deloitte - LiveInfo');
  });
});
