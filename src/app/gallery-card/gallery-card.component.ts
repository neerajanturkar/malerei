import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.css']
})
export class GalleryCardComponent implements OnInit {

  @Input() title: any;
  @Input() detail: any;
  @Input() image : any;
  @Input() artist: any;
  @Input() current_bid: any;
  @Input() expiry: any;
   
  bid_url: any;
  constructor() { }
 
  ngOnInit() {
    this.bid_url = '/viewPainting/' + this.detail; 
    console.log(this.bid_url);
    
  }

}
