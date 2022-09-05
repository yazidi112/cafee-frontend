import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../core/services/authentication.service';

@Injectable()
export class AuthentificationInterceptor implements HttpInterceptor {

  constructor(private authService: AuthenticationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const headers = new HttpHeaders();
    headers.append('Authorization', `Bearer ${this.authService.getToken()}`);
    const updatedRequest = request.clone({headers});
    return next.handle(updatedRequest);
  }
}
