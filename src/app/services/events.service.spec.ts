import { TestBed } from '@angular/core/testing';

import { EventsService } from './events.service';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('EventsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ FormsModule, RouterModule, RouterTestingModule ,HttpClientTestingModule ],
  }));

  it('should be created', () => {
    const service: EventsService = TestBed.get(EventsService);
    expect(service).toBeTruthy();
  });
});
