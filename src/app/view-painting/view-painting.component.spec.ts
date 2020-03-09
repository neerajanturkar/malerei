import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ViewPaintingComponent } from './view-painting.component';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from "@angular/router";
import { HttpClient, HttpHandler } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientTestingModule , HttpTestingController } from '@angular/common/http/testing'
describe('ViewPaintingComponent', () => {
  let component: ViewPaintingComponent;
  let fixture: ComponentFixture<ViewPaintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterModule, RouterTestingModule , HttpClientTestingModule ],
      declarations: [ ViewPaintingComponent ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers: []
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
