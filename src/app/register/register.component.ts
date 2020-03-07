import { Component, OnInit, Optional } from '@angular/core';
import {MatDialogRef, MatSnackBar} from '@angular/material';
import { User } from '../model/user.model';
import { FormGroup, FormControl, Validators, FormBuilder, NgForm } from "@angular/forms";
import { RxwebValidators } from '@rxweb/reactive-form-validators';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

// export interface Type{
//   typeName: string;
// }

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel:User = {
    name: '',
    email: '',
    password: '',
    type: 'select'
  };

  // types : Type[] = [
  //   {typeName:'User',},
  //   {typeName:'Admin'}
  // ];
  userTypes = ['User','Admin'];

  userTypeHasError = true;
  msg: string = null;

  submitted = false;
  isLoading = false;
  // registerForm: FormGroup;
  // private mode = "create";

  validateUserType(value){
    if(value === 'select'){
      this.userTypeHasError = true;
    } else {
      this.userTypeHasError = false;
    }
  }

  constructor(public dialogBox: MatDialogRef<RegisterComponent>,
              private formBuilder:FormBuilder, private snackBar: MatSnackBar,
              private router: Router,
              private authService: AuthService) { }

  ngOnInit() {
    // this.registerForm = this.formBuilder.group({
    //   'name': ['', Validators.required],
    //   'type': ['', Validators.required],
    //   'email': ['', [Validators.required, Validators.email]],
    //   'password': ['', [Validators.required, Validators.minLength(4)]],
    //   'confirmPassword': ['', RxwebValidators.compare({fieldName: 'password'})]
    // })
    // this.registerForm = new FormGroup({
    //   name: new FormControl(null, {
    //     validators: [Validators.required, Validators.minLength(3)]
    //   }),
    //   type: new FormControl(null, { validators: [Validators.required] }),
    //   email: new FormControl(null, { validators: [Validators.required] }),
    //   password: new FormControl(null, { validators: [Validators.required] }),
    //   confirmPassword: new FormControl('', RxwebValidators.compare({fieldName: 'password'})),
    // });
  }

  onRegister(userForm: NgForm){
  
    // stop here if form is invalid
    if (userForm.invalid) {
      return;
    }
    
    this.isLoading = true;
    this.authService.createUser(userForm.value).subscribe(res => {
      this.router.navigate(["/gallery"]);
      this.snackBar.open(res['message'], '', {
        duration: 5000,
        verticalPosition: 'top'
      });
      
    });
    console.log(userForm.value);
    this.onClose();
  }

  onClose() {
    this.dialogBox.close();
  }

}
