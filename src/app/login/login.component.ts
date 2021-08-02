// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Login } from '../models/login';
import { LoginService } from '../services/login service/login.service';
import { Router } from '@angular/router';
// import { data } from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit{
  constructor (
  public fb: FormBuilder,
  private loginService: LoginService,
  private router: Router,
  // public Form:FormGroup,
  // public errMess:String,
)
   {
    this.createForm();
  }
  // log;in: Login;
  login: Login = {
    email: '',
    password: ''
  }
  Form: FormGroup;
  errMess: String;
  FormErrors:any = {
    email: '',
    password: '',
  };

  validationMessages:any = {
    email: {
      required: 'Email is required.',
      email: 'Email not in valid format.',
    },
    password: {
      required: 'Password is required.',
    },
  };



  createForm() {
    this.Form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
    this.Form.valueChanges.subscribe((data) => this.onValueChanged(data));

    // console.log(this.data)
  }

  onValueChanged(data?: any) {
    if (!this.Form) {
      return;
    }
    const form = this.Form;
    for (const field in this.FormErrors) {
      if (this.FormErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.FormErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.FormErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.login = this.Form.value;
    this.loginService.login(this.login);
  }

  ngOnInit(): void {}


}

