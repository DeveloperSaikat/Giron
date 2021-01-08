import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { SignupInputModel } from '../models/input/signup-input-model';
import { Observable } from 'rxjs';
import { SignupOutputModel } from '../models/output/signup-output-model';
import { ConstantUrls } from '../constants/constant-urls';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationServiceService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  signupUser(signupInputModel: SignupInputModel): Observable<SignupOutputModel> {
    return this.httpClient.post<SignupOutputModel>(`${ConstantUrls.apiUrl}/users`, signupInputModel);
  }

  isUsernameAvailable(username: string): Observable<boolean> {
    return this.httpClient.head<any>(`${ConstantUrls.apiUrl}/users/${username}`)
      .pipe(map((res: Response) => {
        return res.ok;
      }));
  }
}
