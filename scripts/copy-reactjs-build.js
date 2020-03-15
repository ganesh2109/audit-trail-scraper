var shell = require('shelljs');

// copy the static files
shell.cp('-R', 'client/build/static', 'src/workers/web/public');
// copy index.html to index.hbs and move it to the views folder
shell.cp('client/build/index.html', 'client/build/index.hbs');
shell.mv('client/build/index.hbs', 'src/workers/web/views/');
