import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  login(): void {

    const myusername = (document.getElementById('username') as HTMLInputElement).value;
    console.log( + ' ' + myusername);
    // routing
   //this.router.navigate(['/home']);



  }
}
