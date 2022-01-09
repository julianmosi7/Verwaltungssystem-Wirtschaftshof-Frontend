import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthenticationDto } from '../models/authenticationDto';
import { TokenDto } from '../models/tokenDto';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url = 'http://localhost:8081';

  private booleanRepository = new Subject<boolean>();

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
    sessionStorage.removeItem('currentUser');
    this.notifyLogged();
  }

  public notifyLogged(): void{
    if(sessionStorage.getItem('currentUser')){
      this.booleanRepository.next(true);
    }else{
      this.booleanRepository.next(false);
    }
  }

  public listenLogged(): Observable<boolean>{
    return this.booleanRepository.asObservable();
  }
}
