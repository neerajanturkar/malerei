import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  private apiUrl = "http://localhost:5000/api/v1/"
  constructor(private http: HttpClient) { }

  getArts(filters: any): Promise<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 
    let body = JSON.stringify(filters); // To-do use service for search
    return this.http
    .get(this.apiUrl+"arts", { headers: headers })
    .toPromise()
  }

  getArt(id: any): Promise<any> {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 
    return this.http
    .get(this.apiUrl+"arts/"+id, { headers: headers })
    .toPromise()
  }

  placeBid(id:any, data:any ) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 
    let body = JSON.stringify(data);
    return this.http
    .put(this.apiUrl+"arts/"+id+"/bid", body, {headers: headers} )
    .toPromise()
  }

  createArt(name: string, location: string, time: string, from:string, to:string, image: File){
    let headers = new HttpHeaders({'Content-Type':'application/json'});
    const postData = new FormData();
    postData.append("name", name);
    postData.append("from", from);
    postData.append("to", to);
    postData.append("time", time);
    postData.append("location", location);
    postData.append("image", image, name);
    this.http.post(this.apiUrl+"/arts", postData).toPromise();

  }


}
