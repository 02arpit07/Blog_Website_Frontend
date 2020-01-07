import {Routes} from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {FooterComponent} from './footer/footer.component';
import {SignupComponent} from './signup/signup.component';
import {AddblogComponent} from './addblog/addblog.component';
import {AllblogComponent} from './allblog/allblog.component';
import {HomeComponent} from './home/home.component';
import {ConnectComponent} from './connect/connect.component';
import {FollowingComponent} from './following/following.component';
import {FollowerComponent} from './follower/follower.component';
import {EditblogComponent} from './editblog/editblog.component';
import {PostcommentComponent} from './postcomment/postcomment.component';
import {MyaccountComponent} from './myaccount/myaccount.component';
import {LogoutComponent} from './logout/logout.component';
import {ProfileComponent} from './profile/profile.component';
import {ViewprofileComponent} from './viewprofile/viewprofile.component';

export  const MAIN_ROUTES: Routes = [
  {
    path: 'homepage',
    component: HomepageComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'addblog',
    component: AddblogComponent,
  },
  {
    path: 'allblog',
    component: AllblogComponent,
  },
  {path : 'profile', component: ProfileComponent},
  {path : 'logout', component: LogoutComponent},
  {path : 'myaccount', component: MyaccountComponent},
  {path : 'postcomment/:id', component: PostcommentComponent},
  {path : 'viewprofile/:userId', component: ViewprofileComponent},
  {path : 'editblog/:id', component: EditblogComponent},
  { path : 'connect',
    component: ConnectComponent,
    children: [
      { path: 'followers', component: FollowerComponent},
      { path: 'following', component: FollowingComponent}
    ],
  },
  {
    path: '**',
    component: LoginComponent,
  }
];
