import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { GalleryService } from '../gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService,
    private router: Router) { }
  title : string;
  detail: string;
  image: string;
  image1: string;
  description: string;
  current_bid: any;
  expiry: any;
  artist: any;
  filters: any;
  tiles: any;
  arts = [];
  ngOnInit() {
    this.title = "Ice & Fire";
    this.artist = "Neeraj Anturkar";
    this.detail = "http://google.com";
    this.image = "../../assets/pic1.jpg";
    this.image1 = "../../assets/main_background.jpg";
    this.current_bid = 100;
    this.expiry = "20-12-2020";

    this.galleryService.getArts(this.filters).then(data => {
      this.arts = data;
      console.log(this.arts);
    });
    // this.tiles = [
    //   {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    //   {text: 'Two', cols: 1, rows: 1, color: 'lightgreen'},
    //   {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    //   {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    //   {text: 'five', cols: 1, rows: 1, color: '#DDBDF1'},
    //   {text: 'five', cols: 1, rows: 1, color: '#DDBDF1'},
    //   {text: 'seven', cols: 1, rows: 1, color: '#DDBDF1'},
    // ];
  }

}
