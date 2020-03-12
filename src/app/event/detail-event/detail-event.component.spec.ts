import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEventComponent } from './detail-event.component';
import {MatTableModule} from '@angular/material';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('DetailEventComponent', () => {
  let component: DetailEventComponent;
  let fixture: ComponentFixture<DetailEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailEventComponent ],
      imports: [MatTableModule,  RouterModule,
        RouterTestingModule,
        HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
