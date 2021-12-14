import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { AuthenticationDto } from 'src/app/models/authenticationDto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  public getUsername(): string{
    return this.userData.get("username").value;
  }

  public getPassword(): string{
    return this.userData.get("password").value;
  }

  errorMessage = '';
  token = '';

  constructor(private authenticationService: AuthenticationService) {

  }

  ngOnInit(): void {
  }

  login(): void {
    let authenticationDto: AuthenticationDto = {
      username: this.getUsername(),
      password: this.getPassword()
    }
    this.errorMessage = '';
    this.token = '';
    this.authenticationService.login(authenticationDto).subscribe(
      x => console.log(x),
      error => this.errorMessage = `${error.statusText}/${error.status}`);
    };
    
}
