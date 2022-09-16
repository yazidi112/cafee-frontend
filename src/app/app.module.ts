import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { CommandeModule } from './commande/commande.module';
import { AuthentificationInterceptor } from './interceptors/authentification.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule ,
    CoreModule,
    AuthenticationModule,
    SharedModule,
    CommandeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthentificationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
