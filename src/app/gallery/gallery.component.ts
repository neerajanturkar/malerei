import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router) { }
  title : string;
  detail: string;
  image: string;
  image1: string;
  description: string;
  current_bid: any;
  expiry: any;
  artist: any;
  ngOnInit() {
    this.title = "Ice & Fire";
    this.artist = "Neeraj Anturkar";
    this.detail = "http://google.com";
    this.image = "../../assets/pic1.jpg";
    this.image1 = "../../assets/main_background.jpg";
    this.current_bid = 100;
    this.expiry = "20-12-2020";
  }

}