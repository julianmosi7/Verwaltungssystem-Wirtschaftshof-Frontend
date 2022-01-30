import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuftragserfassungComponent } from './auftragserfassung.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker'
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {AppModule} from '../app.module';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [AuftragserfassungComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class AuftragserfassungModule { }
