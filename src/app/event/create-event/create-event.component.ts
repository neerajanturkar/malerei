import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Exhibition} from '../../model/event.model';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { mimeType } from "./mime-type.validator";

import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  name:"";
  from:Date;
  to:Date;
  time:"";
  location:"";
  exhibition: Exhibition;
  isLoading = false;
  form: FormGroup;
  imagePreview:string;
  private mode = "create";
  private eventId: string;

  constructor(public eventService: EventsService,
    public route: ActivatedRoute) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(3)]
      }),
      location: new FormControl(null, { validators: [Validators.required] }),
      time: new FormControl(null, { validators: [Validators.required] }),
      from: new FormControl(null, { validators: [Validators.required] }),
      to: new FormControl(null, { validators: [Validators.required] }),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
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
  }

  onSaveEvent(){
    if (this.form.invalid) {
      return;
    }
    this.isLoading = true;
    if (this.mode === "create") {
      this.eventService.addPost(
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );
    } else {
      this.eventService.updatePost(
        this.eventId,
        this.form.value.title,
        this.form.value.content,
        this.form.value.image
      );
    }
    this.form.reset();
  }

}
