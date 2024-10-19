import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { User } from './user';
import { AuthResponse } from './auth-response';
import { Observable, tap } from 'rxjs';
import { Storage } from '@ionic/storage-angular'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  initializedStorage: boolean = false;

  AUTH_SERVER_ADDRESS: string = 'http://localhost:4000';

  constructor(private httpClient: HttpClient, private storage: Storage) { 
    this.initializeStorage();
  }

  async initializeStorage(){
    if (!this.initializedStorage) await this.storage.create();
    this.initializedStorage = true;
  }

  isInitializedStorage(){
    return this.initializedStorage;
  }

  private getOptions(user: User) {
    let base64UserAndPassword = window.btoa(user.username + ":" + user.password);

    let basicAccess = 'Basic ' + base64UserAndPassword;

    let options = {
      headers: {
        'Authorization': basicAccess,
        'Content-Type': 'application/x-www-form-urlencoded',
      }
      //, withCredentials: true
    };

    return options;
  }


  register(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/api/users/`, user, this.getOptions(user)).pipe(
      tap(async (res: AuthResponse) => {

        if (res.user) {
          await this.storage.set("token", res.access_token);
        }
      })

    );
  }

  login(user: User): Observable<AuthResponse> {
    return this.httpClient.post<AuthResponse>(`${this.AUTH_SERVER_ADDRESS}/api/users/signin`, null, this.getOptions(user)).pipe(
      tap(async (res: AuthResponse) => {

        if (res.user) {
          await this.storage.set("token", res.access_token);
        }
      })
    );
  }

  async logout() {
    await this.storage.remove("token");
  }

  async isLoggedIn() {
    let token = await this.storage.get("token");
    if (token) { //Just check if exists. This should be checked with current date
      return true;
    }
    return false;
  }
}
