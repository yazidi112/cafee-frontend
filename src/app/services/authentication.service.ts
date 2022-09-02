import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';
import { User } from '../modles/user';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  
  users!: User[];
  authenticatedUser! : User|undefined;

  constructor(private router: Router) { 
    this.users = [
      {username:"imran",password:"1234",roles:['USER']},
      {username:"omar",password:"1234",roles:['USER']},
      {username:"admin",password:"1234",roles:['USER','ADMIN']},
    ]
  }

  login(username:String, password:String): Observable<User>{
    let appUser = this.users.find(user=>username==user.username);
    if(!appUser){
      return throwError(()=>new Error("User not found!"));
    }
    if(appUser.password!=password){
      return throwError(()=>new Error("Password error!"));
    }
    this.setAuthenticatedUser(appUser);
    return of(appUser);
  }

  logout(){
    this.authenticatedUser = undefined;
    localStorage.removeItem("user");
  }

  setAuthenticatedUser(user: User){
    this.authenticatedUser = user;
    localStorage.setItem("user",JSON.stringify({
      "username":this.authenticatedUser.username,
      "roles": this.authenticatedUser.roles
    }));
  }

  getAuthenticatedUSer():User{
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