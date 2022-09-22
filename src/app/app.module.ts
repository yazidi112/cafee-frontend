import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { AuthentificationInterceptor } from './interceptors/authentification.interceptor';
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { CommandeModule } from './commande/commande.module';
import { CategorieModule } from './categorie/categorie.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
    CommandeModule,
    CategorieModule,
    DashboardModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthentificationInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
