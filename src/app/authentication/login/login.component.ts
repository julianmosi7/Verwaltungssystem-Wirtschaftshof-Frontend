import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { AuthenticationDto } from 'src/app/models/authenticationDto';
import { TokenDto } from 'src/app/models/tokenDto';
import { Url } from 'url';

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

  returnUrl: Url;
  tokenDto: TokenDto;

  public getUsername(): string{
    return this.userData.get("username").value;
  }

  public getPassword(): string{
    return this.userData.get("password").value;
  }

  errorMessage = '';
  token = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) { }


  ngOnInit(): void {
    console.log(`LoginComponent::ngOnInit`);
    //this.authenticationService.logout();
    //this.returnUrl = this.route.snapshot?.queryParams?.returnUrl || '/';
  }



  login(): void {
    const authenticationDto: AuthenticationDto = {
      username: this.getUsername(),
      password: this.getPassword()
    };
    this.errorMessage = '';
    this.token = '';
    this.authenticationService.login(authenticationDto).subscribe(
      x => {
        this.tokenDto = x;
        this.router.navigate(['/auftragserfassung']);
      },
      error => this.errorMessage = `${error.statusText}/${error.status}`);
    };
    
}