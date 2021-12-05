import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuftragserfassungComponent } from './auftragserfassung.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AuftragserfassungComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatTableModule
  ]
})
export class AuftragserfassungModule { }
