import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/authentication.service';
import { AuthenticationDto } from 'src/app/models/authenticationDto';
import {ActivatedRoute, Router} from '@angular/router';
import {NavbarComponent} from '../../navbar/navbar.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService, private route: ActivatedRoute, public router: Router ) {

  }
  userData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });
  private returnUrl: string;

  errorMessage = '';
  token = '';

  ngOnInit(): void {
    this.authenticationService.logout();
    this.returnUrl = this.route.snapshot?.queryParams?.returnUrl || '/';
  }

  public getUsername(): string {
    return this.userData.get('username').value;
  }

  public getPassword(): string {
    return this.userData.get('password').value;
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
        console.log(x);
        console.log(sessionStorage.getItem('currentToken'));
        this.router.navigate(['/home']);
        //NavbarComponent.user = x.user
      }, error => {
        console.log(this.errorMessage);
      });

  }
}
