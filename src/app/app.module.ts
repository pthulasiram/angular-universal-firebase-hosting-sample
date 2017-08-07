import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routes';
import { AppComponent } from './app.component';
import { FrontPageModule } from './front-page/front-page.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'my-app' }),
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FrontPageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
