import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Exhibition } from '../../model/event.model';
import { EventsService } from '../../services/events.service';
import { Subscription } from 'rxjs';
import { DetailEventComponent } from '../detail-event/detail-event.component';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { AuthService } from '../../services/auth.service';

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

  isAuth: boolean = false;
  iconDisable = true;
  userType: string;

  constructor(private router: Router,
              private eventService: EventsService,
              private authService: AuthService,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap);
    });
    this.isLoading = true;
    this.eventService.getEvent(this.filters);
    this.postsSub = this.eventService.getPostUpdateListener()
      .subscribe((exhibitions: Exhibition[]) => {
        this.isLoading = false;
        this.exhibitions = exhibitions;
      });
      this.isAuth = this.authService.getIsAuth();
      this.userType = this.authService.getUserType();
      console.log(this.userType);
  }

  onCreateEvent(){
    this.router.navigate(["/create-event"]);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
