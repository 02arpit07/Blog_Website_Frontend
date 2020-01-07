import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AuthenticationServiceService} from '../authenticationservice.service';
import {BlogserviceService} from '../blogservice.service';
import {RegistrationService} from '../registration.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  private searchedItem: any;
  private res;
  private role;
  private user;
  @Output() private childEvent = new EventEmitter();
  // tslint:disable-next-line:max-line-length
  constructor(private loginService: AuthenticationServiceService, private registrationService: RegistrationService, private blogservice: BlogserviceService) { }
  ngOnInit() {
    this.registrationService.getUser().subscribe( data => {
      this.user = data;
      this.role = this.user.role;
    });
  }

  searchOnClick() {
    console.log(this.searchedItem);
    // tslint:disable-next-line:triple-equals
    if (this.searchedItem != undefined && this.searchedItem != '') {
      this.blogservice.getSearchedResult(this.searchedItem).subscribe(data => {
        this.res = data;
        this.childEvent.emit(this.res);
      });
    }
  }
}
