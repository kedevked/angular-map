import {Component, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {delay, startWith} from 'rxjs/internal/operators';
import {FormControl} from '@angular/forms';
import {AppService} from '../app.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  locations: string[] = ['Ensimag', 'Atos', 'Mall', 'Museum', 'Stadium'];
  filterLocation$;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );
  search = new FormControl();
  ngOnInit() {
    this.filterLocation$ =  this.search.valueChanges
      .pipe(
      map((e: string) => {
          const value = e;
          this.appService.setQuery(e);
          return value ? this.locations
              .filter(l => l.toLowerCase().includes(value.toLowerCase()))
            : this.locations;
        }
      ),
      startWith(this.locations),
      delay(0));
  }
  constructor(
    private breakpointObserver: BreakpointObserver,
    private appService: AppService) {}
}
