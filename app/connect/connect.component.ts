import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {BlogserviceService} from '../blogservice.service';
import {AuthenticationServiceService} from '../authenticationservice.service';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {

  private role;
  private user;
  private currentUser;
  private searchedItem: string;
  private getUser;
  constructor(private blogService: BlogserviceService, private router: Router,
              private route: ActivatedRoute, private loginService: AuthenticationServiceService,
              private registrationService: RegistrationService) { }

  ngOnInit() {
    this.registrationService.getUser().subscribe(data => {
      console.log(data);
      this.user = data;
    });
  }

  searchUser() {
    this.registrationService.findUser(this.searchedItem).subscribe(data => {
      this.getUser = data;
    });
  }

  viewProfile(id) {
    this.router.navigate(['viewprofile', id]);
  }

  seeFollowers() {
    this.router.navigate(['connect/followers']);
  }

  seeFollowing() {
    this.router.navigate(['connect/following']);
  }

}
