import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {DemoPage} from '../pages/demo/demo';
import {TabsPage} from '../pages/tabs/tabs';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {EChartsDirective} from '../directive/echarts.directive';
import {NativeService} from '../service/native.service'
import {ApiService} from '../service/api.service'
import {HttpService} from '../service/http.service'
import {HttpModule} from '@angular/http';
import {AppVersion} from '@ionic-native/app-version';
import {IonicStorageModule} from '@ionic/storage';
import {Camera} from '@ionic-native/camera';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {LocalNotifications} from '@ionic-native/local-notifications';
import {IonJPushModule} from 'ionic2-jpush'
import {PhotoViewer} from '@ionic-native/photo-viewer';
import {Badge} from '@ionic-native/badge';
import {GraphPage} from "../pages/graph/graph";
import {ChartPage} from "../pages/chart/chart";
import {ScreenOrientation} from '@ionic-native/screen-orientation';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DemoPage,
    ChartPage,
    GraphPage,
    TabsPage,
    EChartsDirective
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonJPushModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    DemoPage,
    ChartPage,
    GraphPage,
    TabsPage
  ],
  providers: [
    StatusBar, SplashScreen, Camera, BarcodeScanner, NativeService, LocalNotifications,//native服务
    HttpService, ApiService, //restfull或http服务
    AppVersion, PhotoViewer, Badge, ScreenOrientation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
