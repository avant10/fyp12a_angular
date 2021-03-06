import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
//import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { LogComponent } from './log/log.component';
import {WebCamComponent} from './webcam/webcam.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from './authentication.service';
import { AuthGuardService } from './auth-guard.service';
import { AddblogComponent } from './addblog/addblog.component';
import { WebcamModule} from 'ngx-webcam';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'webcam', component: WebCamComponent },
  { path: 'log', component: LogComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  /* {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  } */
];

@NgModule({
  declarations: [
    LogComponent,
    AppComponent,
    WebCamComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddblogComponent
  ],
  imports: [

    WebcamModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthenticationService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {}
