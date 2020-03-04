import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Exhibition } from '../../model/event.model';
import { EventsService } from '../../services/events.service';
import { Subscription } from 'rxjs';
import { DetailEventComponent } from '../detail-event/detail-event.component';
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: 'app-show-events',
  templateUrl: './show-events.component.html',
  styleUrls: ['./show-events.component.css']
})
export class ShowEventsComponent implements OnInit, OnDestroy{
  exhibitions: Exhibition[] = [];
  isLoading = false;
  private postsSub: Subscription;

  constructor(private router: Router,
              private eventService: EventsService,
              
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      console.log(paramMap);
    });
    this.isLoading = true;
    this.eventService.getEvent();
    this.postsSub = this.eventService.getPostUpdateListener()
      .subscribe((exhibitions: Exhibition[]) => {
        this.isLoading = false;
        this.exhibitions = exhibitions;
      });

      
        // if (paramMap.has("eventId")) {
        //   this.mode = "edit";
        //   this.eventId = paramMap.get("eventId");
        //   this.isLoading = true;
        //   this.eventService.getEvent(this.eventId).subscribe(postData => {
        //     this.isLoading = false;
        //     this.exhibition = {
        //       id: postData._id,
        //       name: postData.name,
        //       from: postData.from,
        //       to: postData.to,
        //       time: postData.time,
        //       location: postData.location,
        //       image_url: postData.image_url
        //     };
        //     console.log(this.eventId);
        //     this.form.setValue({
        //       name: this.exhibition.name,
      //         from: this.exhibition.from,
      //         to: this.exhibition.to,
      //         time: this.exhibition.time,
      //         location: this.exhibition.location,
      //         image: this.exhibition.image_url
      //       });
      //     });
      //   } else {
      //     this.mode = "create";
      //     this.eventId = null;
      //   }
      // });
  }

  onCreateEvent(){
    this.router.navigate(["/create-event"]);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}
