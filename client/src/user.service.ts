import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

const inspectUserUrl = 'http://localhost:3000/api/user/';
const duelUsersUrl = 'http://localhost:3000/api/users?';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  async inspectUser(username = 'andrew') {
    let source = this.http.get(inspectUserUrl + username);
    try {
      let data = await lastValueFrom(source);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async duelUsers(user1 = 'fabpot', user2 = 'andrew') {
    let data = await this.http
      .get(duelUsersUrl + `username=${user1}&username=${user2}`)
      .toPromise();
    console.log(data);
    return data;
  }
}
