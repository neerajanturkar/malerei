import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onCreateEvent(){
    this.router.navigate(["/create-event"]);
  }
}
