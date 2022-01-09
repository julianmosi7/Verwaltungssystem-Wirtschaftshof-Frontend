import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../core/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  loggedIn: boolean;
  currentUser: String;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.currentUser = 'selimosi';
    this.authenticationService.listenLogged().subscribe(x => {
      this.loggedIn = x;
      console.log(this.loggedIn);
    });
   
  }

  // tslint:disable-next-line:typedef
  logout() {
    this.authenticationService.logout();
    location.reload();
  }
}
