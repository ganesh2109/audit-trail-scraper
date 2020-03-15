import { join } from 'path';
import detectLocale from '../../../localization/detect.locale';

export default function(req, res, next) {
  let requestedLanguage = detectLocale(req);

  // eslint-disable-next-line @typescript-eslint/no-var-requires
  var messages = require(join(__dirname, '..', '..', '..', 'locales', requestedLanguage));
  var handlebarsData = res.locals.data || (res.locals.data = {});
  handlebarsData.intl = {
    locales: [requestedLanguage],
    messages: messages,
    formats: {
      date: {
        short: {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
        },
      },
      time: {
        hhmm: {
          hour: 'numeric',
          minute: 'numeric',
        },
      },
    },
  };

  next();
}
