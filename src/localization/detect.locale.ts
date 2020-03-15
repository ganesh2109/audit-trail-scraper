import * as localeConfig from './locale.config';

export default function (req: any): string {
  let availableLocales = localeConfig.availableLocales;
  let requestedLanguage;
  let app = req ? req.app : null;
  req = req || { query: {}, headers: {} };

  // Use the language from the session if available
  let session = req.session || {};

  if (session.passport && session.passport.user && session.passport.user._json) {
    requestedLanguage = session.passport.user._json.language.replace('_', '-');
  }

  // If the request is specifying the language, then this takes priority
  if (!req.query) {
    req.query = {};
  }

  let overrideLanguage = (req.query && req.query.language) || (req.headers && req.headers['accept-language']);

  if (overrideLanguage) {
    requestedLanguage = overrideLanguage;
  }

  // Now determine if the language requested is valid for use
  let defaultLocale = (app ? app.get('default locale') : '') || 'en-US';

  if (!availableLocales.includes(requestedLanguage)) {
    requestedLanguage = defaultLocale;
  }

  return requestedLanguage;
}
