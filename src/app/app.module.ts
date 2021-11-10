import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { AuftragserfassungComponent } from './auftragserfassung/auftragserfassung.component';
import {AuftragszuweisungComponent} from './auftragszuweisung/auftragszuweisung.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AuftragserfassungComponent,
    AuftragszuweisungComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory})
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
