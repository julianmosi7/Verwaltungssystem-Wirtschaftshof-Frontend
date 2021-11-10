import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegisterComponent} from './authentication/register/register.component';
import {NavbarComponent} from './navbar/navbar.component';
import {AuftragszuweisungComponent} from './auftragszuweisung/auftragszuweisung.component';
import {AuftragserfassungComponent} from "./auftragserfassung/auftragserfassung.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent },
  {path: 'auftragszuweisung', component: AuftragszuweisungComponent},
  {path: 'auftragserfassung', component: AuftragserfassungComponent},
// otherwise redirect to home
  {path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
