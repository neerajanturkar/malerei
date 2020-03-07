import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) {}
  show_login: boolean;
  show_register: boolean;
  show_gallery: boolean;
  show_events: boolean;
  show_logout: boolean;
  base_url = 'http://localhost:4200/';
  ngOnInit() {
    localStorage.setItem('isLogedin', 'true');
    if (window.location.href === this.base_url) {
      this.show_gallery = true;
      this.show_events = true;
      if (localStorage.getItem('isLogedin') === null || localStorage.getItem('isLogedin') === 'false') {
        this.show_login =  true;
        this.show_register = true;
        this.show_logout = false;
      } else {
        this.show_login =  false;
        this.show_register = false;
        this.show_logout = true;
      }
    }
    if (window.location.href === this.base_url + 'gallery') {
      this.show_gallery = false;
      this.show_events = true;
      if (localStorage.getItem('isLogedin') === null || localStorage.getItem('isLogedin') === 'false') {
        this.show_login =  true;
        this.show_register = true;
        this.show_logout = false;
      } else {
        this.show_login =  false;
        this.show_register = false;
        this.show_logout = true;
      }
    }
  }

}
