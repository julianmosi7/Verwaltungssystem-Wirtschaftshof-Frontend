import { Component, OnInit } from '@angular/core';
import {UserDto} from '../../models/userDto';
import {RoleDto} from '../../models/roleDto';
import {AuftragserfassungService} from '../../core/auftragserfassung.service';
import {FormControl, FormGroup} from '@angular/forms';
import {AuthenticationDto} from '../../models/authenticationDto';
import {LicenceDto} from '../../models/licenceDto';
import {HolidayDto} from '../../models/holidayDto';
import {AssignmentDto} from '../../models/assignmentDto';
import {AuthenticationService} from '../../core/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private auftragsservice: AuftragserfassungService, private authenticationService: AuthenticationService, private router: Router) { }
  userData = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl(''),
    email: new FormControl(''),
    birthdate: new FormControl(''),
    role: new FormControl('')
  });
  roles: RoleDto[] = [];
  user: UserDto;


  ngOnInit(): void {
    this.auftragsservice.getRoles().subscribe(x => {
      console.log(x);
      this.roles = x;
    });
  }



  register(): void {

    this.user = {
      userId: null,
      username: this.userData.get('username').value,
      password: this.userData.get('password').value,
      firstname: this.userData.get('firstname').value,
      lastname: this.userData.get('lastname').value,
      email: this.userData.get('email').value,
      birthdate: this.userData.get('birthdate').value,
      role: this.userData.get('role').value,
      licence: null,
      assignments: null
    };

    this.authenticationService.register(this.user).subscribe(x => {
      console.log(x);
    });

    this.router.navigate(['/auftragserfassung']);

  }
}
