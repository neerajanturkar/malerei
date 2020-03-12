import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { GalleryService } from '../gallery.service';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  providers: [GalleryService]
})
export class GalleryComponent implements OnInit {

  constructor(private galleryService: GalleryService, private authService: AuthService,
    private router: Router) { }
  title: string;
  detail: string;
  image: string;
  image1: string;
  description: string;
  current_bid: any;
  expiry: any;
  artist: any;
  filters: any;
  tiles: any;
  search: any;
  arts = [];
  isAuth = false;
  iconDisable = true;
  ngOnInit() {
    this.title = "Ice & Fire";
    this.artist = "Neeraj Anturkar";
    this.detail = "http://google.com";
    this.image = "../../assets/pic1.jpg";
    this.image1 = "../../assets/main_background.jpg";
    this.current_bid = 100;
    this.expiry = "20-12-2020";
    this.isAuth = this.authService.getIsAuth();
    this.galleryService.getArts(this.search).then(data => {
      this.arts = data;
      console.log(this.arts);
    });
  }
  viewPainting(event) {
    console.log(event.target.parentElement.id);
    this.router.navigate(['/view-painting/' + event.target.parentElement.id]);
  }
  createPainting(event) {
    this.router.navigate(['/create-painting']);
  }
  getSearchedArts(event) {
    console.log(this.search);
    this.galleryService.getArts(this.search).then( data => {
      this.arts = data;
    });
  }

}
