import { Component } from '@angular/core';

// just an interface for type safety.
interface Marker {
  lat: number;
  lng: number;
  label?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat = 45.188529;
  lng = 5.724523999999974;
  zoom = 12;
  previous;

  markers: Marker[] = [
    {
      lat: 45.1931492,
      lng: 5.7674826999999596,
      label: 'Ensimag'
    },
    {
      lat: 45.1539228,
      lng: 5.7207387999999355,
      label: 'Atos'
    },
    {
      lat: 45.1949173,
      lng: 5.732278299999962,
      label: 'Museum'
    },
    {
      lat: 45.1874353,
      lng: 5.740127799999982,
      label: 'Stadium'
    },
    {
      lat: 45.158158,
      lng: 5.731906999999978,
      label: 'Mall'
    }
  ];

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
    console.log('click');
  }

}
