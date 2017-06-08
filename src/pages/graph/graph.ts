import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ScreenOrientation} from '@ionic-native/screen-orientation';
import {Observable} from "rxjs/Observable";

// import SVG from 'svg.js'
@Component({
  selector: 'page-graph',
  templateUrl: 'graph.html'
})
export class GraphPage {
  private o: Observable<void>;

  constructor(private screenOrientation: ScreenOrientation) {
    this.o = this.screenOrientation.onChange();
    this.o.subscribe((_) => {
      alert(this.screenOrientation.type)
    });
  }

  ngOnInit() {
    // SVG.get("#drawing1 circle").attr({fill:'#0f0'});
    var s = Snap("#drawing");
    Snap.load("assets/s.svg", f => {
      s.append(f);
      s.select("circle").attr({
        fill: '#00f'
      });
    });
  }
}
