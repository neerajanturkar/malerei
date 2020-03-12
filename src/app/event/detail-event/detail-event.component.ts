import { Component, OnInit, OnDestroy} from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Exhibition } from '../../model/event.model';
import { Subscription } from 'rxjs';

export interface PeriodicElement {
  position: number;
  ticket_type: string;
  price: string;
}
const ELEMENT_DATA : PeriodicElement[] =  [
  {position: 1, ticket_type: 'Adult', price: '10'},
  {position: 2, ticket_type: 'Child', price: '5'},
  {position: 3, ticket_type: 'Student', price: '7'},
  {position: 4, ticket_type: 'Group', price: '8'}
]

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit, OnDestroy{
  exhibitions: any;
 
  private eventId: string;
  private postsSub: Subscription;

  displayedColumns: string[] = ['position', 'ticket_type', 'price'];
  
  dataSource = ELEMENT_DATA;

  constructor(
              public eventService: EventsService,
              public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap : ParamMap) => {
      this.eventId = paramMap.get('id');
      console.log(this.eventId);
    
      return this.eventService.getEventById(this.eventId)
        .subscribe((exh) => {

        this.exhibitions = exh;
      });
      })
  
   
   
  }

  // onClose(){
  //   this.dialogBox.close();
  //   //this.eventService.getEventById('click');
    
  // }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
