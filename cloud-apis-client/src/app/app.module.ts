import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OmdbServiceProvider } from '../providers/omdb-service/omdb-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MovieComponent } from '../components/movie/movie';

@NgModule({
      declarations: [
            MyApp,
            HomePage,
            MovieComponent,
      ],
      imports: [
            BrowserModule,
            HttpClientModule,
            IonicModule.forRoot(MyApp)
      ],
      bootstrap: [IonicApp],
      entryComponents: [
            MyApp,
            HomePage,
      ],
      providers: [
            StatusBar,
            SplashScreen,
            OmdbServiceProvider,
            HttpClient,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            OmdbServiceProvider
      ]
})
export class AppModule { }
