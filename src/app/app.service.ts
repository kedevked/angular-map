import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

// just an interface for type safety.
export interface Marker {
  lat: number;
  lng: number;
  label?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor() { }
  search = null;
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
  behaviorSubject = new BehaviorSubject(this.markers);
  getMarkers(): Observable<Marker[]> {
    return this.behaviorSubject.asObservable();
  }

  filterLocation = (query) => {
    return this.markers
      .filter(m => m.label.toLowerCase().includes(query.toLowerCase()));
  }

  setQuery(s: string) {
    this.search = s;
    this.behaviorSubject.next(this.filterLocation(s));
  }
}
