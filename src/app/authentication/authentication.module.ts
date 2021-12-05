import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import {RouterModule} from '@angular/router';
import { AuftragszuweisungComponent } from '../auftragszuweisung/auftragszuweisung.component';
import {AppModule} from "../app.module";
import { MatButtonModule } from "@angular/material/button";



@NgModule({
  declarations: [LoginComponent, RegisterComponent, AuftragszuweisungComponent],
  imports: [
    CommonModule,
    RouterModule,
    AppModule,
    MatButtonModule
  ]
})
export class AuthenticationModule { }
