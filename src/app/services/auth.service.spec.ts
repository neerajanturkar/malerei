import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MatDialogModule, MatSnackBarModule} from '@angular/material';

describe('AuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterModule,
      RouterTestingModule,
      HttpClientTestingModule, MatSnackBarModule]
  }));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });
});
