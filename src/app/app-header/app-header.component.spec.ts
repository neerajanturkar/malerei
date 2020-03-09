import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { AppHeaderComponent } from './app-header.component';
import {DebugElement} from '@angular/core';

describe('AppHeaderComponent', () => {
  let component: AppHeaderComponent;
  let fixture: ComponentFixture<AppHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Brand logo should be  M A L E R E I', () => {
    const headerComponent: DebugElement = fixture.debugElement;
    const brand = headerComponent.query(By.css('.brand-logo'));
    const p: HTMLElement = brand.nativeElement;
    expect(p.textContent).toEqual('M A L E R E I');
  });

});
