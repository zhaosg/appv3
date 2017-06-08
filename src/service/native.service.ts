import {Injectable} from '@angular/core';
import {AlertController} from 'ionic-angular';
import {Storage} from '@ionic/storage';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {BarcodeScanner} from '@ionic-native/barcode-scanner';
import {AppVersion} from '@ionic-native/app-version';
import {LocalNotifications} from '@ionic-native/local-notifications';
import {JPushService} from 'ionic2-jpush'
import {Platform} from 'ionic-angular';
import {PhotoViewer} from '@ionic-native/photo-viewer';
import {Badge} from '@ionic-native/badge';

@Injectable()
export class NativeService {
  constructor(private alertCtrl: AlertController,
              private storage: Storage,
              private nativecCamera: Camera,
              private appVersion: AppVersion,
              private barcodeScanner: BarcodeScanner,
              private platform: Platform,
              private jPushPlugin: JPushService,
              private photoViewer: PhotoViewer,
              private badge: Badge,
              private localNotifications: LocalNotifications) {
    platform.ready().then(() => {
      this.jPushPlugin.init()
        .then(res => {
          // alert('result:'+res)
          this.getRegistrationID();
        })
        .catch(err => alert(err));


      this.jPushPlugin.openNotification()
        .subscribe(res => {
          console.log('收到推送');
          console.log(res)
        });

      this.jPushPlugin.receiveNotification()
        .subscribe(res => {
          console.log('收到推送');
          console.log(res)
        });

      this.jPushPlugin.receiveMessage()
        .subscribe(res => {
          console.log('收到推送');
          console.log(res)
        });

    })
  }


  /**
   * 获取ID
   */
  getRegistrationID() {
    this.jPushPlugin.getRegistrationID()
      .then(res => alert(res))
      .catch(err => alert(err))
  }

  public camera() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.nativecCamera.DestinationType.FILE_URI,
      encodingType: this.nativecCamera.EncodingType.JPEG,
      mediaType: this.nativecCamera.MediaType.PICTURE
    }
    this.nativecCamera.getPicture(options).then((imageData) => {
      // alert('拍照成功'+imageData);
      this.photoViewer.show(imageData);
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;

    }, (err) => {
      // Handle error
      alert(err);
    });
  }


  public scanCode() {
    return this.barcodeScanner.scan();
  }

  public getVersionNumber() {
    this.appVersion.getVersionNumber().then(function (version) {
      alert(version)
    });
  }

  public teststrage() {
    this.storage.set('age', 28);
    this.storage.get('age').then((val) => {
      alert(val);
    });
  }

  public notify() {
    this.badge.set(10);
    this.localNotifications.schedule([{
      id: 2,
      title: '在新起点上，勇攀世界科技高峰',
      text: '实习近平总书记在“科技三会”上的重要讲话一周年述评',
      icon: 'https://imgsa.baidu.com/baike/s%3D500/sign=1297f363b68f8c54e7d3c52f0a282dee/7e3e6709c93d70cf86019f80fadcd100bba12b47.jpg',
      smallIcon: 'res://icon'
    }]);
    // this.badge.increase(1);
  }
}
