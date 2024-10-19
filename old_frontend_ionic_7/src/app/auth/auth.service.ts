import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, tap } from 'rxjs';
import { AuthResponse } from './auth-response';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  initialized: boolean = false;

  AUTH_SERVER_ADDRESS: string = 'http://localhost:4000';

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  // async ngOnInit() {
  //   // If using a custom driver:
  //   // await this.storage.defineDriver(MyCustomDriver)
  //   if (!this.initialized) await this.storage.create();
  // }


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
          // await this.storage.set("idUser", res.user.id);
        }
      })
    );
  }

  async logout() {
    await this.storage.remove("token");
  }

  async isLoggedIn() {
    // return this.authSubject.asObservable();
    let token = await this.storage.get("token");
    if (token) { //Just check if exists. This should be checked with current date
      return true;
    }
    return false;
  }
}
