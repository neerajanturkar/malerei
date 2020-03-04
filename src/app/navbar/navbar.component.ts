import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {MatDialogConfig, MatDialog,  MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit() {
  }

  onRegiterDialog(){
    
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "50%";
    this.dialog.open(RegisterComponent, dialogConfig);
  }

}
