import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {
  apiUrl = 'http://localhost:5000/api/v1/'
  constructor(private http: HttpClient) { }

  getArts(filters: any): Promise<any> {
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    if (filters === undefined || filters === '') {
      return this.http
          .get(this.apiUrl + 'arts' , { headers: headers })
          .toPromise();
    } else {
      return this.http
          .get(this.apiUrl + 'arts?search=' + filters, { headers: headers })
          .toPromise();
    }

  }

  getArt(id: any): Promise<any> {
    let headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http
    .get(this.apiUrl + 'arts/' + id, { headers: headers })
    .toPromise();
  }

  placeBid(id:any, data:any ) {
    let headers = new HttpHeaders({'Content-Type':'application/json'}); 
    let body = JSON.stringify(data);
    return this.http
    .put(this.apiUrl+"arts/"+id+"/bid", body, {headers: headers} )
    .toPromise()
  }

  createArt(data: FormData) {

    return this.http.post(this.apiUrl + 'arts', data).toPromise();

  }


}
