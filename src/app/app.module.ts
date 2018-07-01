// Import Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

// Import serivces
import { AuthService } from './services/auth.service';
import { WindowService } from './services/window.service';
import { ApiService } from './services/api.service';
import { GlobalService } from './global.service';


// Import Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderStaticComponent } from './partials/nav/header-static/header-static.component';
import { ContactComponent } from './contact/contact.component';
import { InputComponent } from './input/input.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ToastComponent } from './toast/toast.component';
import { GetInvolvedComponent } from './get-involved/get-involved.component';
import { AboutComponent } from './about/about.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { ChallengecardComponent } from './challengecard/challengecard.component';
import { ChallengelistComponent } from './challengelist/challengelist.component';
import { TeamcardComponent } from './teamcard/teamcard.component';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { PubliclistsComponent } from './publiclists/publiclists.component';
import { ForceloginComponent } from './forcelogin/forcelogin.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderStaticComponent,
    InputComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    ContactComponent,
    ToastComponent,
    GetInvolvedComponent,
    AboutComponent,
    CardlistComponent,
    ChallengecardComponent,
    ChallengelistComponent,
    TeamcardComponent,
    TeamlistComponent,
    PubliclistsComponent,
    ForceloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    AuthService,
    WindowService,
    ApiService,
    GlobalService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
