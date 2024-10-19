import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  AUTH_SERVER_ADDRESS: string = 'http://localhost:4000';

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  private getOptions(token: string) {

    let bearerAccess = 'Bearer ' + token;

    let options = {
      headers: {
        'Authorization': bearerAccess,
        // 'Content-Type' : 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };

    return options;
  }

  getUsers(token: string) {
    let myOptions = this.getOptions(token);
    console.log(myOptions)
    return this.httpClient.get(`${this.AUTH_SERVER_ADDRESS}/api/users`, myOptions);
  }
}
