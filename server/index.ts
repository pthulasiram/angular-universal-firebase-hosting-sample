import * as angularUniversal from 'angular-universal-express-firebase';

export let trigger = angularUniversal.trigger({
  index: __dirname + '/index.html',
  main: __dirname + '/main.bundle',
  staticDirectory: __dirname + '/dist',
  enableProdMode: true
});
