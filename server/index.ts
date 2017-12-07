import * as angularUniversal from 'angular-universal-express-firebase';

export let trigger = angularUniversal.trigger({
  index: __dirname + '/dist-server/index.html',
  main: __dirname + '/dist-server /main.bundle',
  staticDirectory: __dirname + '/dist',
  enableProdMode: true,
  cdnCacheExpiry: 1200,
  browserCacheExpiry: 600
});
