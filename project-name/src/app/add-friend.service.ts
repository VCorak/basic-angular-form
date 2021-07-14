import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Friend } from './friend';

@Injectable({
  providedIn: 'root'
})
export class AddFriendService {

  constructor(private _http: HttpClient) { }
  url = 'http://localhost:9012/';

  addFriend(friend : Friend) {
    return this._http.post<any>(this.url, friend)

  }
}
