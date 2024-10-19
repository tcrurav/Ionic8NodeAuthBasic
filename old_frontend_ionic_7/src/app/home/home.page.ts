import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import {Storage} from '@ionic/storage-angular'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  initialized: boolean = false;

  constructor(private authService: AuthService, private router: Router, private storage: Storage) {}
  
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
