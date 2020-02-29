import { Component, OnInit } from '@angular/core';
import { createClient, Entry } from 'contentful';
@Component({
  selector: 'app-create-painting',
  templateUrl: './create-painting.component.html',
  styleUrls: ['./create-painting.component.css']
})
export class CreatePaintingComponent implements OnInit {

  constructor() { }

  private cdaClient = createClient({
    space: 're38ihlwwbee',
    accessToken: 'dNzMMuh3TTUoCP-JEgW8tosmQrSDv7iH6lGrKKoqMNk'
  });

  ngOnInit() {
    let items = this.getProducts();
    console.log(items);
  }

  getProducts(query?: object): Promise<Entry<any>[]> {
    return this.cdaClient.getEntries(Object.assign({}, query))
    .then(res => res.items);
  }
  
  uploadPicture(event){


 
  
    
    
    
}
}
