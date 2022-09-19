import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/services/authentication.service';

@Injectable()
export class AuthentificationInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    if(request.url.endsWith("/api/auth/signin"))
      return next.handle(request);

    const Authorization = `Bearer ${this.authService.getToken()}`;
    return next.handle(request.clone({ setHeaders: { Authorization } }));
  }
}
