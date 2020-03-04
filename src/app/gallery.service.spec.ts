import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpHandler, HttpClientModule  } from '@angular/common/http';
import {HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing'
import { GalleryService } from './gallery.service';

describe('GalleryService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
  ],
    providers: [GalleryService]
  }));

  it('should be created', () => {
    const service: GalleryService = TestBed.get(GalleryService);
    expect(service).toBeTruthy();
  });
});
