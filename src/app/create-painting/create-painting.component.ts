import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {mimeType} from '../event/create-event/mime-type.validator';


@Component({
  selector: 'app-create-painting',
  templateUrl: './create-painting.component.html',
  styleUrls: ['./create-painting.component.css']
})
export class CreatePaintingComponent implements OnInit {

  constructor(private galleryService: GalleryService) { }
  imagePreview: any;
  image_file: any;
  // title: any;
  // artist: any;
  // dimension: any;
  // type: any;
  // location: any;
  // expiry: any;
  // starting_price: any;
  form: FormGroup;
  ngOnInit() {
    this.imagePreview = '../../assets/upload.jpg';
    this.form = new FormGroup({
      title: new FormControl(),
      artist: new FormControl(),
      dimension: new FormControl(),
      type: new FormControl(),
      location: new FormControl(),
      expiry: new FormControl(),
      starting_price: new FormControl(),
      image: new FormControl()
    });
  }

  uploadPicture(event) {
    this.image_file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({ image: this.image_file });
    this.form.get("image").updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      // console.log(this.imagePreview);
    };
    reader.readAsDataURL(this.image_file);
  }
  submitArt() {
    const artData = new FormData();
    artData.append('name', this.form.value.title);
    artData.append('artist', this.form.value.artist);
    artData.append('dimension', this.form.value.dimension);
    artData.append('type', this.form.value.type);
    artData.append('location', this.form.value.location);
    artData.append('expiry', this.form.value.expiry);
    artData.append('starting_price', this.form.value.starting_price);
    artData.append('image', this.image_file);
    this.galleryService.createArt(artData).then( data => {
      console.log(data);
    });

  }
}
