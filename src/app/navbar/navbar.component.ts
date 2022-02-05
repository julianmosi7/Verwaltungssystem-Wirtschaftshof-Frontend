import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
import { UserDto } from '../models/userDto';
import { TokenDto } from '../models/tokenDto';
import jwt_decode from "jwt-decode";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  tokenString: string;
  currentUser: String;

  constructor(private authenticationService: AuthenticationService) { }

  // tslint:disable-next-line:typedef
  static user: UserDto;


  ngOnInit(): void {
    if(sessionStorage.getItem("currentUser")){
      this.getCurrentUser();
    }else{
      console.log("no user found");
    }
    
    this.authenticationService.listenLogged().subscribe(x => {
      console.log("logged in:");
      console.log(x);
      if(x){
        this.getCurrentUser();
      }else{
        console.log("no user found");
      }
    });
  }

  getCurrentUser(): void{
    console.log("currentUser in getCurrentUserMethod:");
    console.log(sessionStorage.getItem("currentUser"));

    this.tokenString = sessionStorage.getItem("currentUser");
    JSON.parse(this.tokenString).token;
    var decoded = jwt_decode(this.tokenString);
    console.log(decoded);
    var entries = Object.values(decoded);
    console.log(entries[0]);

    this.currentUser = entries[0];
  }

  logout() {
    this.authenticationService.logout();
    location.reload();
  }
}
