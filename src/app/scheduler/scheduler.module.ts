
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {DayPilotModule} from 'daypilot-pro-angular';
import {HttpClientModule} from '@angular/common/http';
import {AuftragserfassungService} from '../core/auftragserfassung.service';

import {MatTableModule} from '@angular/material/table';
import {SchedulerComponent} from './scheduler.component';

@NgModule({
  imports:      [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    DayPilotModule,
    MatTableModule
  ],
  declarations: [
    SchedulerComponent

  ],
  exports:      [ SchedulerComponent ],
  providers:    [ AuftragserfassungService ]
})
export class SchedulerModule { }
