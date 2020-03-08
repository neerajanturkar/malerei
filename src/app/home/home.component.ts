import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { Exhibition } from '../model/event.model';
import { EventsService } from '../services/events.service';
import { Subscription } from 'rxjs';
import { User } from '../model/user.model';
import { FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";
import { RxwebValidators } from '@rxweb/reactive-form-validators';

export interface Type{
  typeName: string;
}

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

  name: '';
  type: 'select';
  email: '';
  password: '';
  confirmPassword: '';
  user: User;
  registerForm: FormGroup;
  private mode = "create";

  types: Type[] = [
    {typeName: 'User'},
    {typeName: 'Admin'}
  ];
  
  constructor(private router: Router,
              private eventService: EventsService,
              private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      'name': ['', Validators.required],
      'type': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'password': ['', [Validators.required, Validators.minLength(4)]],
      'confirmPassword': ['', RxwebValidators.compare({fieldName: 'password'})]
    });
   
    this.isLoading = true;
    this.eventService.getEvent(this.filter);
    this.postsSub = this.eventService.getPostUpdateListener()
      .subscribe((exhibitions: Exhibition[]) => {
        this.isLoading = false;
        this.exhibitions = exhibitions;
        console.log(this.exhibitions);
      });
  }

  onEventPage() {
    this.router.navigate(["/display-event"]);
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }

}
