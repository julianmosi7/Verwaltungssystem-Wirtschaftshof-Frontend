import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationDto } from '../models/authenticationDto';
import { TokenDto } from '../models/tokenDto';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'http://localhost:8081';

  constructor(private http: HttpClient) { }

  public login(authenticationDto: AuthenticationDto): Observable<TokenDto>{
    return this.http.post<TokenDto>(`${this.url}/authenticate`, authenticationDto)
    .pipe(
      tap(user => {
        if(user && user.token){
          sessionStorage.setItem('currentUser', JSON.stringify(user));
        }else{
          const us = document.getElementById('username');
          const pw = document.getElementById('password');
          if (us !== null && pw !== null) {
            pw.style.borderColor = 'red';
            us.style.borderColor = 'red';
          }
        }
      })
    );
  }

  public logout(): void{
    console.log('AuthenticationService::logout');
    sessionStorage.removeItem('currentUser');
  }
}
