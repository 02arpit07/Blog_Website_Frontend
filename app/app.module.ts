import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NavbarComponent } from './navbar/navbar.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { AddblogComponent } from './addblog/addblog.component';
import { AllblogComponent } from './allblog/allblog.component';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from './home/home.component';
import { ConnectComponent } from './connect/connect.component';
import { EditblogComponent } from './editblog/editblog.component';
import { FollowerComponent } from './follower/follower.component';
import { FollowingComponent } from './following/following.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { PostcommentComponent } from './postcomment/postcomment.component';
import { ProfileComponent } from './profile/profile.component';
import { ViewprofileComponent } from './viewprofile/viewprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    NavbarComponent,
    FooterComponent,
    AddblogComponent,
    AllblogComponent,
    LogoutComponent,
    HomeComponent,
    ConnectComponent,
    EditblogComponent,
    FollowerComponent,
    FollowingComponent,
    MyaccountComponent,
    PostcommentComponent,
    ProfileComponent,
    ViewprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
