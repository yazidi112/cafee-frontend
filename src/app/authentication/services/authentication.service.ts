import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {environment} from '../../../environments/environment';
import { User } from '../../core/models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   
  
  users!: User[];
  
  authenticatedUser! : User|undefined;

  constructor(private router: Router,private http:HttpClient){}

  getToken():string|undefined{
    return this.authenticatedUser!.accessToken
  }

  login(username:string, password:string){
    return this.http.post<User>(
      environment.apiUrl+'/api/auth/signin',
      {"username":username,"password":password} 
    );
  }

  logout(){
    this.authenticatedUser = undefined;
    localStorage.removeItem("user");
    return true;
  }

  setAuthenticatedUser(user: User){
    this.authenticatedUser = user;
    localStorage.setItem("user",JSON.stringify({
      "username":this.authenticatedUser.username,
      "roles": this.authenticatedUser.roles,
      "token": this.authenticatedUser.accessToken
    }));
  }

  getAuthenticatedUSer():User|undefined{
    return this.authenticatedUser!;
  }

  isAuthenticated():boolean{
    if(this.authenticatedUser==undefined)
      return false;  
    return true;
  }
}