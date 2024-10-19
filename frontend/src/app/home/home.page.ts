import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  initialized: boolean = false;

  constructor(
    private storage: Storage,
    private authService: AuthService,
    private router: Router) {}

  async ngOnInit() {
    // If using a custom driver:
    // await this.storage.defineDriver(MyCustomDriver)
    if (!this.initialized) await this.storage.create();
  }

  loginOrJustEnter(){
    this.authService.isLoggedIn().then(loggedIn => {

      if(loggedIn){
        this.router.navigateByUrl("/you-are-logged-in");
        return;
      } 
      this.router.navigateByUrl("/login");
    })
  }

}
