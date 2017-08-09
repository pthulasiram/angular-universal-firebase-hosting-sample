import * as express from 'express';
import { enableProdMode as enableProd } from '@angular/core';
import { renderModuleFactory } from '@angular/platform-server';
import * as fs from 'fs';
import { Observable, Observer } from 'rxjs';
import 'zone.js/dist/zone-node';

export interface ServerConfiguration {
  main: string;
  index: string;
  enableProdMode?: boolean;
  staticDirectory?: string;
}

function readFile$(file: string): Observable<string> {
  return Observable.create((observer: Observer<string>) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if(err) { 
        observer.error(err); 
      } else { 
        observer.next(data);
        observer.complete();
      }
    });
  });
}

function angularUniversal({ index, main, staticDirectory, enableProdMode = false }: ServerConfiguration) {
  if (enableProdMode) { enableProd(); }
  return (req: express.Request, res: express.Response) => {
    readFile$(index)
      .mergeMap(document => {
        const url = req.path;
        const AppServerModuleNgFactory = require(main).AppServerModuleNgFactory;
        return Observable.from(renderModuleFactory(AppServerModuleNgFactory, { document, url }))
      })
      .take(1)
      .subscribe(html => { res.send(html); });
  };
}

const app = express();
app.use(express.static(__dirname + '/dist'));
app.get('/*', angularUniversal({
  index: __dirname + '/index.html',
  main: __dirname + '/main.bundle',
  enableProdMode: true
}));

app.listen('3005', () => { console.log('Listening on 3005...'); });
