import { TestBed } from '@angular/core/testing';

import * as uuid from 'uuid';
import { AuthenticationServiceService } from './authentication-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('AuthenticationServiceService', () => {
  let service: AuthenticationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(AuthenticationServiceService);
  });

  it('username is available', () => {
    expect(service.isUsernameAvailable(uuid.v4())).toBeTrue();
  });
});
