import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {error} from 'util';
import {AuthenticationServiceService} from '../authenticationservice.service';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginservice: AuthenticationServiceService, private use: RegistrationService) { }
  username = '';
  password = '';
  invalidLogin = false;

  ngOnInit() {
  }


  checkLogin() {
    console.log(this.username);
    console.log(this.password);
    this.loginservice.authenticate(this.username, this.password).subscribe(data => {
      this.router.navigate(['home']);
      this.invalidLogin = false;
    });
    this.invalidLogin = true;
  }
}
