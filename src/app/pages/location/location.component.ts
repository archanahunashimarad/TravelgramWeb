import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const L: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  lat: any;
  lng: any;

  constructor(
    private _router: Router
  ) {
    this.lat = this._router.getCurrentNavigation().extras.state.lat;
    this.lng = this._router.getCurrentNavigation().extras.state.lng;
  }

  isLoading = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.showMap();
  }

  showMap(){
    this.isLoading = false;
    var latlng = [this.lat, this.lng]
    let mymap = L.map('map').setView(latlng, 16);
  
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mymap);

    let marker = L.marker(latlng).addTo(mymap);
    marker.bindPopup("<b>From here.</b>").openPopup();
  }
}
