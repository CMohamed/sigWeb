import {AfterViewInit, Component, OnInit} from '@angular/core';

import OlMap from 'ol/Map';
import OlXYZ from 'ol/source/XYZ';
import OlTile from 'ol/source/Tile';
import OlTileWMS from 'ol/source/TileWMS';
import OlTileLayer from 'ol/layer/Tile';
import OlView from 'ol/View';

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
      source: this.source
    });

    this.couches[1] = new OlTileLayer({
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
      view: this.view
    });
  }

  constructor() { }


  ngAfterViewInit() {
    this.map.setTarget('map');
  }

}
