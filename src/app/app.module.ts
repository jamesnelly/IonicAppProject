import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { Flashlight } from '@ionic-native/flashlight';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { IonicStorageModule } from '@ionic/storage';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AnimalsPage } from '../pages/animals/animals';
import { CropsPage } from '../pages/crops/crops';
import { MachineryPage } from '../pages/machinery/machinery';
import { MoviePage} from '../pages/movie/movie';
import {FlashlightPage} from '../pages/flashlight/flashlight';

import { MovieProvider } from '../providers/movie/movie';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AnimalsPage,
    CropsPage,
    MachineryPage,
    MoviePage,
    FlashlightPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
   

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AnimalsPage,
    CropsPage,
    MachineryPage,
    MoviePage,
    FlashlightPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MovieProvider,
    Flashlight
  ]
})
export class AppModule {}
