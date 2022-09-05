import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthentificationInterceptor } from './authentification.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthentificationInterceptor, multi: true }
];