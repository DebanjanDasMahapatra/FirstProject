import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class VisitorService {

  constructor(private _http: HttpClient) { }

    //Registration APIs
    _baseUrl = 'https://8cae5683.ngrok.io'
    registerUser(val: User) {
      return this._http.post<any>(this._baseUrl+'/users/register',val);
    }
    fetchUserData(val: {}) {
      return this._http.post<any>(this._baseUrl+'/users/getUserData',val);
    }
}
