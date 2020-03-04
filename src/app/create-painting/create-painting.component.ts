import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-painting',
  templateUrl: './create-painting.component.html',
  styleUrls: ['./create-painting.component.css']
})
export class CreatePaintingComponent implements OnInit {

  constructor() { }
  imagePreview: any;

  ngOnInit() {
    this.imagePreview = '../../assets/upload.jpg';
  }

  uploadPicture(event) {
    const file = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string;
      console.log(this.imagePreview);
    };
    reader.readAsDataURL(file);
  }
  submit() {
    alert('submit called');
  }
}
