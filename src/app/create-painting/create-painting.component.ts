import { Component, OnInit } from '@angular/core';
import { GalleryService } from '../gallery.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from "@angular/router";
import {mimeType} from '../event/create-event/mime-type.validator';
import { MatSnackBar } from '@angular/material';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-create-painting',
  templateUrl: './create-painting.component.html',
  styleUrls: ['./create-painting.component.css'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'ja-JP'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class CreatePaintingComponent implements OnInit {
  constructor(private galleryService: GalleryService,
              private _adapter: DateAdapter<any>,
              private snackBar: MatSnackBar,
              private router: Router) { }
  imagePreview: any;
  image_file: any;
  form: FormGroup;
  ngOnInit() {
    window.scrollTo(0, 0);
    this._adapter.setLocale('de');
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
    artData.append('art_type', this.form.value.type);
    artData.append('location', this.form.value.location);
    artData.append('expiry', this.form.value.expiry);
    artData.append('starting_price', this.form.value.starting_price);
    artData.append('image', this.image_file);
    this.galleryService.createArt(artData).then( data => {

      this.snackBar.open(data['message'], '', {
        duration: 500,
        verticalPosition: 'top'
      });
      this.router.navigate(['/gallery']);
    });
  }
  clearForm() {
    this.form.reset();
  }
}
