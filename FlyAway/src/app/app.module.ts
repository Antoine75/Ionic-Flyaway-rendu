import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HomePageComponent} from "./home-page/home-page.component";
import {FormsModule} from "@angular/forms";
import { config } from './firebase';
import { AngularFireModule                } from '@angular/fire';
import {AngularFireAuthModule} from "@angular/fire/auth";
import {RegisterComponent} from "./register/register.component";

import {AngularFirestoreModule} from "@angular/fire/firestore";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
      AppComponent,
      HomePageComponent,
      RegisterComponent,
      LoginComponent,
      HomeComponent,
  ],
  entryComponents: [],
  imports: [
      BrowserModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      AngularFireModule.initializeApp(config),
      AngularFireAuthModule,
      AngularFirestoreModule,
      ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
