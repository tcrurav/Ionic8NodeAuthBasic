import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private authService: AuthService,
    private router: Router) {}

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
