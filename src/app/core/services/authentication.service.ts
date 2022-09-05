import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
   
  
  users!: User[];
  token: String ="AAAAAAAAAAAA";
  authenticatedUser! : User|undefined;

  constructor(private router: Router,private http:HttpClient){}

  getToken():String{
    return this.token;
  }

  login(username:String, password:String){
    return this.http.get<User>('http://localhost:8080/user/1');
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
      "token": this.getToken()
    }));
  }

  getAuthenticatedUSer():User|undefined{
    return this.authenticatedUser!;
  }

  hasRole(role:String):boolean{
    return this.authenticatedUser!.roles.includes(role)
  }

  isAuthenticated():boolean{
    if(this.authenticatedUser==undefined)
      return false;  
    return true;
  }
}