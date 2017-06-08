import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {NativeService} from '../../service/native.service'
import {ApiService} from '../../service/api.service'
import {GraphPage} from "../graph/graph";
import {ChartPage} from "../chart/chart";

// import { NavController, MenuController } from 'ionic-angular';
@Component({
  selector: 'page-demo',
  templateUrl: 'demo.html'
})
export class DemoPage {
  items = [
    {code: "barcode", label: "二维码/条形码"},
    {code: "graph", label: "组态图"},
    {code: "echarts", label: "图表"},
    {code: "version", label: "显示版本号"},
    {code: "paizhao", label: "拍照"},
    {code: "storage", label: "存储"},
    {code: "notify", label: "通知"},
    {code: "people", label: "Http"}
  ];

  constructor(private alertCtrl: AlertController,
              private nativeService: NativeService,
              private api: ApiService,
              public navCtrl: NavController) {

  }

  public itemSelected(item: object) {
    if (item['code'] == 'barcode') {
      this.scanCode();
    } else if (item['code'] == 'version') {
      this.nativeService.getVersionNumber();
    } else if (item['code'] == 'paizhao') {
      this.nativeService.camera();
    } else if (item['code'] == 'graph') {
      this.navCtrl.push(GraphPage);
    } else if (item['code'] == 'echarts') {
      this.navCtrl.push(ChartPage);
    } else if (item['code'] == 'storage') {
      this.nativeService.teststrage();
    } else if (item['code'] == 'notify') {
      this.nativeService.notify();
    } else if (item['code'] == 'http') {
      this.api.searchPlace().then(function (data) {
        console.dir(data);
      });
    } else if (item['code'] == 'people') {
      this.api.test().then(function (data) {
        alert(data['results'][0].email);
      });
    }
  }

  public scanCode() {
    let me = this;
    this.nativeService.scanCode().then((result) => {
      let alert = this.alertCtrl.create({
        title: '扫码结果',
        subTitle: "Result: " + result.text + "\nFormat: " + result.format + "\nCancelled: " + result.cancelled,
        buttons: ['确定']
      });
      alert.present();
    }, (err) => {
    });
  }
}
