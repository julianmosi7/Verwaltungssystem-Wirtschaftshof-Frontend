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
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AuftragserfassungDialogComponent } from './components/auftragserfassung-dialog/auftragserfassung-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


import {MatTableModule} from '@angular/material/table';
import {SchedulerModule} from './scheduler/scheduler.module';






@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AuftragszuweisungComponent,
    AuftragserfassungDialogComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CalendarModule.forRoot({provide: DateAdapter, useFactory: adapterFactory}),
    BrowserAnimationsModule,
    AuftragserfassungModule,
    AuthenticationModule,
    CoreModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    SchedulerModule,
    MatTableModule
  ],
  providers: [],
  exports: [
    NavbarComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
