import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/core/models/user';
import { AuthenticationService } from 'src/app/authentication/services/authentication.service';
import { FormService } from '../../../core/services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;
  constructor(
    private router:Router, 
    private formBuilder: FormBuilder,
    private formService :FormService,
    private authService: AuthenticationService
  ){}

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      username: this.formBuilder.control("yazidi2",[Validators.required,Validators.minLength(3)]),
      password: this.formBuilder.control("yazidi2",[Validators.required,Validators.minLength(4)])
    })
  }

  login(){
    let username = this.loginFormGroup.value.username;
    let password = this.loginFormGroup.value.password;
    this.authService.login(username,password).subscribe({
      next: (user:User|null)=>{
        if(!user){
          alert("Login or password error");
          return;
        }
        this.authService.setAuthenticatedUser(user!);
        this.router.navigateByUrl("admin");
      },
      error: (userError)=>{
        alert("Login error: "+userError.message);
      }
    });;
  }

  logout(){
    if(this.authService.logout())
      this.router.navigateByUrl("/login");
  }

  getFormControlError(controlName: string, error : ValidationErrors){
    return this.formService.getFormControlError(controlName, error)
  }

}
