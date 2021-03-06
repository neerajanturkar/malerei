import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Exhibition } from '../../model/event.model';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { mimeType } from "./mime-type.validator";

import { EventsService } from '../../services/events.service';

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
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  name:"";
  from:"";
  to:"";
  time:"";
  location:"";
  exhibition: Exhibition;
  isLoading = false;
  form: FormGroup;
  imagePreview:string;
  private mode = "create";
  private eventId: string;

  displayedColumns: string[] = ['position', 'ticket_type', 'price'];

  dataSource = ELEMENT_DATA;

  constructor(public eventService: EventsService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      from: new FormControl(null, { validators: [Validators.required] }),
      to: new FormControl(null, { validators: [Validators.required] }),
      time: new FormControl(null, { validators: [Validators.required] }),
      location: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      }),

    });

  }

  onImagePicked(event :Event){
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
    };
    reader.readAsDataURL(file);
    console.log(file);
  }

  onSaveEvent(){
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.eventService.addEvent(
        this.form.value.name,
        this.form.value.from,
        this.form.value.to,
        this.form.value.time,
        this.form.value.location,
        this.form.value.image
      );
    // } else {
    //   this.eventService.getEventById(
    //     this.eventId,
    //   );
    }
    //console.log(this.eventId);
    this.form.reset();
  }

}
