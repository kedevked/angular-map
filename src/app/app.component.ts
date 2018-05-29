import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  lat = 45.188529;
  lng = 5.724523999999974;
  zoom = 12;
  previous;
  markers;
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.markers = this.appService.getMarkers();
  }

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
    console.log('click');
  }

}
