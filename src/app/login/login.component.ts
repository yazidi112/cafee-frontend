import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormService } from '../services/form.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup!: FormGroup;
  constructor(private router:Router, private formBuilder: FormBuilder, private formService :FormService ) { }

  ngOnInit(): void {
    this.loginFormGroup = this.formBuilder.group({
      username: this.formBuilder.control("admin",[Validators.required,Validators.minLength(3)]),
      password: this.formBuilder.control("1234",[Validators.required,Validators.minLength(4)])
    })
  }

  login(){
    this.router.navigateByUrl("admin")
  }

  getFormControlError(controlName: string, error : ValidationErrors){
    return this.formService.getFormControlError(controlName, error)
  }

}
