import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MotorbikeService } from '../services/motorbike.service';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-you-are-logged-in',
  templateUrl: './you-are-logged-in.page.html',
  styleUrls: ['./you-are-logged-in.page.scss'],
})
export class YouAreLoggedInPage implements OnInit {

  initialized: boolean = false;

  constructor(private authService: AuthService, private router: Router, private motorbikeService: MotorbikeService,
    private storage: Storage) { }

  async ngOnInit() {
    if(!this.initialized) await this.storage.create();
    this.getMotorbikes();
  }

  ionViewDidEnter(){
    this.getMotorbikes();
  }

  async getMotorbikes() {
    let token = await this.storage.get("token");
    this.motorbikeService.getMotorbikes(token).subscribe(res => {
      console.log("User Logged in. This is the motorbike list:");
      console.log(res);
    }, error => {
      console.log(error);
      console.log("User not authenticated. Please log in");
      this.router.navigateByUrl("/home");
    });
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigateByUrl("/home");
    });
  }

}
