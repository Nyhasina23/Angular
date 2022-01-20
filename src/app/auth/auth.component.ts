import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  
  authStatus : boolean | any;
  constructor(private authService : AuthService , private router : Router) { }

  ngOnInit(): void {
  this.authStatus = this.authService.isAuth;
  }

  onSignIn(){
    this.authService.signIn().then(
      () => {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['appareils'])
      }
    );
  }

  onSignOut(){
    this.authService.singOut();
    this.authStatus = this.authService.isAuth;
  }
}
