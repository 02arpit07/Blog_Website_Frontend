import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

export class Blog {
  BlogId: number;
  date: Date;
  title: string;
  author: string;
  content: string;
  Private: string;
}
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url = 'http://localhost:1234';
  constructor(private httpClient: HttpClient) { }
  addBlog(blog) {
    const headers = new HttpHeaders({ Authorization : 'Basic ' + btoa('punia@gmail.com' + ':' + '123') });
    return this.httpClient.post(this.url + '/addBlog', blog, {headers});
  }
  getAllBlogs() {
    const headers = new HttpHeaders({ Authorization : 'Basic ' + btoa('punia@gmail.com' + ':' + '123') });
    return this.httpClient.get( this.url + '/allBlogs' , {headers});
  }
}
