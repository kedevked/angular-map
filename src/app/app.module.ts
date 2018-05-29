import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutModule } from '@angular/cdk/layout';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AgmCoreModule} from '@agm/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqeCAur3WuwLz9vaZyfuVA4WzfqSFjmiM'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
