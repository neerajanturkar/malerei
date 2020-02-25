import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor() { }
  title : string;
  detail: string;
  image: string;
  description: string;
  current_bid: any;
  expiry: any;
  artist: any;
  ngOnInit() {
    this.title = "Ice & Fire";
    this.artist = "Neeraj Anturkar";
    // this.description = "What is an image description? An image description gives more details than alt text and allows someone to learn more about what is in an image that goes beyond alt text. Alt text gives the user the most important information while image descriptions provide further detail";
    this.detail = "http://google.com";
    this.image = "../../assets/main_background.jpg";
    this.current_bid = 100;
    this.expiry = "20-12-2020";
  }

}
