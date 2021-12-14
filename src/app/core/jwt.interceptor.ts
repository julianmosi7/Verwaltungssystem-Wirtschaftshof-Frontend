import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
    if(currentUser && currentUser.token){
      console.log("setting bearer...");
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.token}`,
        }
      });
      console.log(`Bearer ${currentUser.token}`);
      console.log(request);
    }
    return next.handle(request);
  }
}
