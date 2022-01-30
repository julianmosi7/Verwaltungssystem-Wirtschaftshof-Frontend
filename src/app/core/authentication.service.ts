import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationDto } from '../models/authenticationDto';
import { TokenDto } from '../models/tokenDto';
import jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'http://localhost:8081';

  private userRepository = new Subject<String>();

  constructor(private http: HttpClient) { }

  public login(authenticationDto: AuthenticationDto): Observable<TokenDto>{
    return this.http.post<TokenDto>(`${this.url}/authenticate`, authenticationDto)
    .pipe(
      tap(user => {
        if(user && user.token){
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          var decoded = jwt_decode(user.token);
          console.log(decoded);
          var entries = Object.values(decoded);
          console.log(entries[0]);


          this.notifyLogged(entries[0]);
        }
      })
    );
  }

  public logout(): void{
    console.log('AuthenticationService::logout');
    sessionStorage.removeItem('currentUser');
  }

  public notifyLogged(user): void{
    if(sessionStorage.getItem('currentUser')){
      this.userRepository.next(user);
    }else{
      this.userRepository.next(null);
    }
  }

  public listenLogged(): Observable<String>{
    return this.userRepository.asObservable();
  }
}
