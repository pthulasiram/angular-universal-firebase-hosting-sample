import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageModule } from './front-page/front-page.module';
import { UiModule } from './ui/ui.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ebooksden' }),
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase, 'ebooksden'),
    AngularFireDatabaseModule,
    UiModule,
    FrontPageModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
