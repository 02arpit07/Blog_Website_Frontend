import { Component, OnInit } from '@angular/core';
import {Users} from '../Users';
import {Router} from '@angular/router';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private register: RegistrationService, private router: Router) { }
  // tslint:disable-next-line:new-parens
  private user: Users = new class implements Users {
    active: boolean;
    email: string;
    gender: string;
    id: number;
    mobileNo: number;
    name: string;
    password: string;
    role: string;
    address: string;
  };
  ngOnInit() {
  }
  createUser() {
    if (this.user.email != null && this.user.gender != null && this.user.mobileNo != null && this.user.name != null
      && this.user.password != null && this.user.address != null ) {
      this.register.createUser(this.user).subscribe(data => {
        alert('User created successfully.');
        this.router.navigate(['login']);
      });
    } else {
      alert('Please fill all the details.');
    }
  }
}
