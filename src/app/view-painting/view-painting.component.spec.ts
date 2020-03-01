import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPaintingComponent } from './view-painting.component';

describe('ViewPaintingComponent', () => {
  let component: ViewPaintingComponent;
  let fixture: ComponentFixture<ViewPaintingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPaintingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPaintingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
