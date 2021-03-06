import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { OmdbServiceProvider } from '../providers/omdb-service/omdb-service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TitleComponent } from '../components/title/title';
import { GamesServiceProvider } from '../providers/games-service/games-service';
import { AuthenticationServiceProvider } from '../providers/authentication-service/authentication-service';
import { CallbackComponent } from '../components/callback/callback';
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [
        MyApp,
        HomePage,
        TitleComponent,
        CallbackComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        HttpModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        HomePage,
        TitleComponent,
        CallbackComponent
    ],
    providers: [
        StatusBar,
        SplashScreen,
        OmdbServiceProvider,
        HttpClient,
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        OmdbServiceProvider,
        GamesServiceProvider,
        AuthenticationServiceProvider
    ]
})
export class AppModule { }
