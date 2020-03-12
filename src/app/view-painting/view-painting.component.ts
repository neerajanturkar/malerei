import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import { ActivatedRoute } from "@angular/router";
import { AuthService } from '../services/auth.service';
export interface BidData {
  datetime: string;
  amount: string;
  user_id: string;

}

@Component({
  selector: 'app-view-painting',
  templateUrl: './view-painting.component.html',
  styleUrls: ['./view-painting.component.css']
})
export class ViewPaintingComponent implements OnInit {

  constructor(private route: ActivatedRoute,private authService: AuthService,
              private galleryService: GalleryService
              ) { }
  id: any;
  art: any;
  placed_bid: any;
  // bids = [];
  bids: BidData[];
  displayedColumns: string[] = ['datetime', 'amount'];
  isAuth:boolean;
  ngOnInit() {
    window.scrollTo(0, 0);
    this.isAuth = this.authService.getIsAuth();
    this.id = this.route.snapshot.paramMap.get('id');
    this.galleryService.getArt(this.id).then(data => {
      this.art = data;
      if (data.bids.length > 0) {
        this.bids = data.bids.reverse();
      }
      console.log(this.bids);
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
