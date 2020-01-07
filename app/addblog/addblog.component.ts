import { Component, OnInit } from '@angular/core';
import {blog, BlogserviceService} from '../blogservice.service';
import {Router} from '@angular/router';
import {RegistrationService} from '../registration.service';
import {Users} from '../Users';

@Component({
  selector: 'app-addblog',
  templateUrl: './addblog.component.html',
  styleUrls: ['./addblog.component.scss']
})
export class AddblogComponent implements OnInit {
  user: Users;
  check;
  // tslint:disable-next-line:new-parens
  private blog: blog = new class implements blog {
    Private: string;
    blogId: number;
    author: string;
    content: string;
    date: Date;
    title: string;
  };
  constructor(private blogService: BlogserviceService, private router: Router, private userservice: RegistrationService) { }
  ngOnInit() {
    this.userservice.getUser().subscribe( data => {
      console.log(data);
      this.user = data;
    });
  }
  changePrivate() {
    this.blogService.makePrivate(this.blog.blogId).subscribe(data => {
    });
  }
  addBlog() {
    this.blog.date = new Date();
    this.blog.author = this.user.name;
    // tslint:disable-next-line:triple-equals
    if (this.blog.Private != 'true') {
      this.blog.Private = 'false';
    }
    console.log(this.blog);
    this.blogService.addBlogs(this.blog).subscribe(data => {
      alert('New Blog Added Successfully');
      this.router.navigate(['profile']);
    });
  }
}
