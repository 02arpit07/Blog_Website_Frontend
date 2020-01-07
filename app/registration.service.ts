import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Users} from './Users';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  private url = 'http://localhost:1234';

  public createUser(user) {
    return this.http.post(this.url + '/addUsers', user);
  }

  public getUser() {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<Users>(this.url + '/callUser', {headers});
  }

  editMyUser(user) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.post<Users>(this.url + '/editUser' , user, {headers});
  }
  findUser(searchedItem) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get(this.url + '/searchUser/' + searchedItem, {headers});
  }
  public viewUser(id) {
    const headers = new HttpHeaders({Authorization: sessionStorage.getItem('basicAuth')});
    return this.http.get<Users>(this.url + '/viewUser/' + id, {headers});
  }
}
