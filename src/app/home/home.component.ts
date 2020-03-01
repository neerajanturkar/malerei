import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Exhibition } from '../model/event.model';
import { EventsService } from '../services/events.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  exhibitions: Exhibition[] = [];
  isLoading = false;
  filter: any;
  private postsSub: Subscription;

  constructor(private router: Router,
              private eventService: EventsService) { }

  ngOnInit() {
    this.isLoading = true;
    this.eventService.getEvent(this.filter);
    this.postsSub = this.eventService.getPostUpdateListener()
      .subscribe((exhibitions: Exhibition[]) => {
        this.isLoading = false;
        this.exhibitions = exhibitions;
      });
  }

  onEventPage() {
    this.router.navigate(["/display-event"]);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
