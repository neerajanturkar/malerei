import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFooterComponent } from './app-footer.component';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('AppFooterComponent', () => {
  let component: AppFooterComponent;
  let fixture: ComponentFixture<AppFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Copyright should be All rights reserved by M A L E R E I', () => {
    const footerComponent: DebugElement = fixture.debugElement;
    const brand = footerComponent.query(By.css('.copyright'));
    const p: HTMLElement = brand.nativeElement;
    expect(p.textContent).toEqual('A L L     R I G H T S    R E S E R V E D    B Y    M A L E R E I');
  });
});
