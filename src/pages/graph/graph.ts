import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import SVG from 'svg.js'

@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html'
})
export class GraphPage {

  constructor(public navCtrl: NavController) {

  }

  ngOnInit() {
    var draw = SVG('drawing');
    draw.rect(100, 100).move(100, 50).fill('#f06');
  }
}
