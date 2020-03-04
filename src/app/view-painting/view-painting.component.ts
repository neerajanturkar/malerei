import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-view-painting',
  templateUrl: './view-painting.component.html',
  styleUrls: ['./view-painting.component.css']
})
export class ViewPaintingComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private galleryService: GalleryService
              ) { }
  id : any;
  art: any;
  placed_bid: any;
  bids = [];
  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
    this.galleryService.getArt(this.id).then(data => {
      this.art = data;
      this.bids = data.bids;
      console.log(this.art);
    });

  }
  placeBid() {

    let data = {
      "user_id": "5e52dd1bb078c85c39f5feec",
	    "bid": this.placed_bid
    }
    this.galleryService.placeBid(this.id, data).then(response => {
      if (!response['success']) {
        alert(response['message']);
      } else {
        alert(response['message']);
        location.reload();
      }
      
    });
  }

}
