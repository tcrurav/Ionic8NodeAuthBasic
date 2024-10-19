import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { User } from '../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  register(form: NgForm) {
    let user: User = {
      // id: null,
      username: form.value.email,
      password: form.value.password,
      name: form.value.name,
      isAdmin: false
    };
    this.authService.register(user).subscribe((res) => {
      this.router.navigateByUrl('home');
    });
  }

}
