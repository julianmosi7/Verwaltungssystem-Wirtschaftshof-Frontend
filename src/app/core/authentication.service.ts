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

  private userRepository = new Subject<Boolean>();

  constructor(private http: HttpClient) { }

  public login(authenticationDto: AuthenticationDto): Observable<TokenDto>{
    return this.http.post<TokenDto>(`${this.url}/authenticate`, authenticationDto)
    .pipe(
      tap(user => {
        if(user && user.token){
          sessionStorage.setItem('currentUser', JSON.stringify(user));
          this.notifyLogged();
        }
      })
    );
  }

  public logout(): void{
    console.log('AuthenticationService::logout');
    sessionStorage.removeItem('currentUser');
  }

  public notifyLogged(): void{
    if(sessionStorage.getItem('currentUser')){
      this.userRepository.next(true);
    }else{
      this.userRepository.next(false);
    }
  }

  public listenLogged(): Observable<Boolean>{
    return this.userRepository.asObservable();
  }
}
