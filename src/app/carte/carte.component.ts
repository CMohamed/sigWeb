import {AfterViewInit, Component, OnInit} from '@angular/core';

import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTile from 'ol/source/Tile';
import OlTileWMS from 'ol/source/TileWMS';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';
import {Group as LayerGroup, Tile as TileLayer} from 'ol/layer.js';

import { fromLonLat } from 'ol/proj';


@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit, AfterViewInit {

  map: OlMap;
  source: OlXYZ;
  layer: OlTileLayer;
  view: OlView;

  couches = [];

  ngOnInit() {
    this.source = new OlXYZ({
      url: 'http://tile.osm.org/{z}/{x}/{y}.png'
    });

    this.couches[0] = new OlTileLayer({
      title: 'BaseMap',
      source: this.source
    });

    this.couches[1] = new OlTileLayer({
      title: 'Regions',
      source: new OlTileWMS({
        url: 'http://localhost:8080/geoserver/EHTP/wms?',
        params: {layers: 'EHTP:regions', tiled: true, transparence: true}
      })
    });

    console.log(this.layer);

    this.view = new OlView({
      center: fromLonLat([6.661594, 50.433237]),
      zoom: 3
    });

    this.map = new OlMap({
      target: 'map',
      layers: this.couches,
      // new LayerGroup({
      //   layers: this.couches
      // }),
      view: this.view
    });
  }

  constructor() { }

  togle(j) {
    console.log(this.map.getLayers());
    this.map.getLayers().forEach(function (layer, i) {
      if (i === j) {
        const test = layer.getVisible();
        layer.setVisible(!test);
      }
     });
    // this.couches.splice(i, 1);
    // console.log(this.couches);
    // this.map = null;
    // this.map = new OlMap({
    //   target: 'map',
    //   layers: this.couches,
    //   view: this.view
    // });
  }

  ngAfterViewInit() {
    this.map.setTarget('map');
  }

}
