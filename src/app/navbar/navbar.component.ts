import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';
import { UserDto } from '../models/userDto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  currentUser: String;

  constructor(private authenticationService: AuthenticationService) { }

  // tslint:disable-next-line:typedef
  static user: UserDto;


  ngOnInit(): void {
    this.currentUser = null;
    this.authenticationService.listenLogged().subscribe(x => {
      this.currentUser = x;
    });
   
  }

  logout() {
    this.authenticationService.logout();
    location.reload();
  }
}
