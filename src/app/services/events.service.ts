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
  private exhibitions: Exhibition[] = [];
  private exhibitionUpdate = new Subject<Exhibition[]>();

  constructor(private http: HttpClient, private router: Router) { }

  getEvent(id: any) {
    this.http
      .get<{ message: string; exhibitions: any }>("http://localhost:5000/api/v1/events/")
      .pipe(
        map(postData => {
          return postData.exhibitions.map((post: { name: any; from: any; to: any; time: any; location: any; _id: any; image_url: any; }) => {
            return {
              name: post.name,
              from: post.from,
              to: post.to,
              time: post.time,
              location: post.location,
              id: post._id,
              image_url: post.image_url
            };
          });
        })
      )
      
      .subscribe(transformedPosts => {
        this.exhibitions = transformedPosts;
        this.exhibitionUpdate.next([...this.exhibitions]);
      });
      
  }
  

  getPostUpdateListener() {
    return this.exhibitionUpdate.asObservable();
  }

  getPost(id: string) {
    return this.http.get<{ _id: string, name: string, from: Date, to: Date, location: string, time: string, image_url: string }>(
      "http://localhost:5000/apiv1/events/" + id
    );
  }

  addEvent(name: string, location: string, time: string, from:string, to:string, image: File) {
    const postData = new FormData();
    postData.append("name", name);
    postData.append("from", from);
    postData.append("to", to);
    postData.append("time", time);
    postData.append("location", location);
    postData.append("image", image, name);
    this.http
      .post<{ message: string; exhibition: Exhibition }>(
        "http://localhost:5000/api/v1/events/",
        postData
      )
      .subscribe(responseData => {
        const post: Exhibition = {
          id: responseData.exhibition.id,
          name: name,
          from: from,
          to: to,
          time: time,
          location: location,
          image_url: responseData.exhibition.image_url
        };
        this.exhibitions.push(post);
                
        this.exhibitionUpdate.next([...this.exhibitions]);
        console.log(responseData);
        this.router.navigate(["/display-event"]);
      });
  }
}
