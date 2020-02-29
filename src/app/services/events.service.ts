import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Subject, from } from "rxjs";
import { map } from "rxjs/operators";
import { Router } from "@angular/router";
import { Exhibition } from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private exhibition: Exhibition[] = [];
  private exhibitionUpdate = new Subject<Exhibition[]>();

  constructor(private http: HttpClient, private router: Router) { }
}
