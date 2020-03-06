import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { User } from '../model/user.model';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { RxwebValidators } from '@rxweb/reactive-form-validators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User;

  loginForm: FormGroup;
  private mode = "create";

  constructor(public dialogBox: MatDialogRef<LoginComponent>,
              private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(4)]],
    })
  }

  onLogin(loginForm){
    this.onClose();
  }

  onClose() {
    this.dialogBox.close();
  }

}
