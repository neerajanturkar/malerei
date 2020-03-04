import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Exhibition } from '../../model/event.model';
import { EventsService } from '../../services/events.service';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit, OnDestroy{
  exhibitions: Exhibition[] = [];
  isLoading = false;
  filters: any;
  private postsSub: Subscription;

  constructor(private router: Router,
              private eventService: EventsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.eventService.getEvent(this.filters);
    this.postsSub = this.eventService.getPostUpdateListener()
      .subscribe((exhibitions: Exhibition[]) => {
        this.isLoading = false;
        this.exhibitions = exhibitions;
      });
  }

  onCreateEvent(){
    this.router.navigate(["/create-event"]);
  }

  onEventPage(){

  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
