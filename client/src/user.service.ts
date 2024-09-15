import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const inspectUserUrl = 'http://localhost:3000/api/user/';
const duelUsersUrl = 'http://localhost:3000/api/users?';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  inspectUser(username: string): Observable<any> {
    return this.http.get<any>(inspectUserUrl + username).pipe(
      catchError((error) => {
        console.error('Error fetching user:', error);
        return of(null);
      })
    );
  }

  async duelUsers(user1 = 'fabpot', user2 = 'andrew') {
    let data = await this.http
      .get(duelUsersUrl + `username=${user1}&username=${user2}`)
      .toPromise();
    console.log(data);
    return data;
  }
}
