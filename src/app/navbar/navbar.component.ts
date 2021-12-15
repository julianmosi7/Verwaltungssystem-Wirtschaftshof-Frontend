import { Component, OnInit } from '@angular/core';
import {UserDto} from '../models/userDto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  constructor() { }

  // tslint:disable-next-line:typedef
  static user: UserDto;


  ngOnInit(): void {
  }

  logout() {

  }
}
