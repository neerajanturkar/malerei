import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';
import { User } from '../model/user.model';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { RxwebValidators } from '@rxweb/reactive-form-validators';

export interface Type{
  typeName: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:User;

  registerForm: FormGroup;
  private mode = "create";

  types: Type[] = [
    {typeName: 'User'},
    {typeName: 'Admin'}
  ];

  constructor(public dialogBox: MatDialogRef<RegisterComponent>,
              private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'type': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(4)]],
      'confirmPassword': ['', RxwebValidators.compare({fieldName: 'password'})]
    })
  }

  onRegister(registerForm){
    this.onClose();
  }

  onClose() {
    this.dialogBox.close();
  }

}
