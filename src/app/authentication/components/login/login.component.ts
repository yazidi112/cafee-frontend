import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
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
      username: this.formBuilder.control("admin",[Validators.required,Validators.minLength(3)]),
      password: this.formBuilder.control("1234",[Validators.required,Validators.minLength(4)])
    })
  }

  login(){
    let username = this.loginFormGroup.value.username;
    let password = this.loginFormGroup.value.password;
    this.authService.login(username,password).subscribe({
      next:()=> this.router.navigateByUrl("/admin"),
      error: error=> alert(error)
    })
  }

  logout(){
    if(this.authService.logout())
      this.router.navigateByUrl("/login");
  }

  getFormControlError(controlName: string, error : ValidationErrors){
    return this.formService.getFormControlError(controlName, error)
  }

}
