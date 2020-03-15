import { Injectable } from '@nestjs/common';
import detectLocale from './detect.locale';
import { join } from 'path';
import * as localeConfig from './locale.config';

interface LabelDefinitions {
  labels: any;
}

@Injectable()
export class LocalizationService {
  public getAvailableLocales(): string[] {
    return localeConfig.availableLocales;
  }

  public getLabel(key: string, req?: Request, locale?: string): string {
    if (!locale) {
      locale = detectLocale(req);
    }
    return this.getLabels(locale).labels[key];
  }

  public getLabels(locale: string): LabelDefinitions {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    let messages = require(join(__dirname, '../locales', locale));

    return {
      labels: messages,
    };
  }
}
