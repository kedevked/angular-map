import {Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {AppService} from './app.service';
import {AgmMarker} from '@agm/core';

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
  @ViewChildren (AgmMarker) agmMarkers: QueryList<AgmMarker>;
  constructor(private appService: AppService) {}
  ngOnInit() {
    this.appService.getMarkers()
      .subscribe(markers => this.markers = markers);
  }

  clickedMarker(infowindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infowindow;
  }

  openInfoWindow(label) {
    const mark: AgmMarker = this.agmMarkers.find(m => {
      return m.title === label;
    });
    const infowindow = mark.infoWindow;
    infowindow.forEach(i => {
      this.clickedMarker(i);
      i.open();
    });
  }

}
