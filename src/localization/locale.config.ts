import glob from 'glob';
import { basename, join } from 'path';

// Determine the app's available locales by globbing for files in locales/.
const availableLocales = glob
  .sync('*.json', {
    cwd: join(__dirname, '../locales/'),
  })
  .map(file => {
    return basename(file, '.json');
  });

export { availableLocales };
