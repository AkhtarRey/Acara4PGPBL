import { Component, OnInit } from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor() {}

  latitude!: number;
  longitude: number | any;

  public async ngOnInit() {
    const position = await Geolocation.getCurrentPosition();
    console.log(position);

    this.latitude = position.coords.latitude;
    this.longitude = position.coords.longitude;

    // this.latitude = -7.3634737;
    // this.longitude = 112.7084992;

    const map = new Map({
      basemap: 'topo-vector',
    });

    const view = new MapView({
      container: 'container',
      map: map,
      zoom: 17,
      center: [this.longitude, this.latitude],
    });
  }
}
