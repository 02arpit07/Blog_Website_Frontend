import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Users} from '../Users';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.scss']
})
export class MyaccountComponent implements OnInit {

  user: Users;
  private name;
  private role;
  private email;
  private password;
  private phoneNumber;
  private temp;
  private temp1;
  private temp2;
  private temp3;
  constructor(private registrationService: RegistrationService, private router: Router) { }
  ngOnInit() {
    this.registrationService.getUser().subscribe( data => {
      console.log(data);
      this.user = data;
      this.email = this.user.email;
      this.temp1 = this.user.email;
      this.name = this.user.name;
      this.temp = this.user.name;
      this.password = this.user.password;
      this.temp2 = this.user.password;
      this.phoneNumber = this.user.mobileNo;
      this.temp3 = this.user.mobileNo;
      this.role = this.user.role;
      console.log(this.user);
    });
  }

  editUser() {
    this.registrationService.editMyUser(this.user).subscribe(data => {
      this.user = data;
      console.log(data);
      alert('Details updated successfully.');
      this.router.navigate(['logout']);
    });
  }
}
