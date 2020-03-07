import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { Login } from '../model/login.model';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from "@angular/forms";
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userModel:Login = {
    email:'',
    password: ''
  };

  loginForm: FormGroup;
  private mode = "create";

  constructor(public dialogBox: MatDialogRef<LoginComponent>,
              private formBuilder:FormBuilder,
              private authService: AuthService) { }

  ngOnInit() {
    // this.loginForm = this.formBuilder.group({
    //   'email': ['', [Validators.required, Validators.email]],
    //   'password': ['', [Validators.required, Validators.minLength(4)]],
    // })
  }

  onLogin(userForm : NgForm){
    if(userForm.invalid){ return; }
    
    this.authService.userLogin(userForm.value);
    userForm.resetForm();
    this.onClose();
  }

  onClose() {
    this.dialogBox.close();
  }

}
