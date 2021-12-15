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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuftragserfassungModule } from './auftragserfassung/auftragserfassung.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationModule } from './authentication/authentication.module';
import { CoreModule } from './core/core.module';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AuftragszuweisungComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    BrowserAnimationsModule,
    AuftragserfassungModule,
    AuthenticationModule,
    CoreModule,
    MatButtonModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
