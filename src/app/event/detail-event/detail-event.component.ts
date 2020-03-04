import { Component, OnInit } from '@angular/core';
import { EventsService } from 'src/app/services/events.service';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { Exhibition } from '../../model/event.model';
import { Subscription } from 'rxjs';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079},
  {position: 2, name: 'Helium', weight: 4.0026},
  {position: 3, name: 'Lithium', weight: 6.941},
  {position: 4, name: 'Beryllium', weight: 9.0122},
  {position: 5, name: 'Boron', weight: 10.811}
]

@Component({
  selector: 'app-detail-event',
  templateUrl: './detail-event.component.html',
  styleUrls: ['./detail-event.component.css']
})
export class DetailEventComponent implements OnInit {
  exhibitions: any;
 
  private eventId: string;
  private postsSub: Subscription;

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
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
