import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AppRoutingModule } from './/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { NgxLoadingModule } from 'ngx-loading';
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider,
} from "angular-6-social-login-v2";

export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider("1072643061885-sq92dlsc260pd7atlujial8svojgr905.apps.googleusercontent.com")
        }
        
      ]
  );
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule,
    SocialLoginModule,
    NgxLoadingModule.forRoot({})
    
  ],
  providers: [HttpClient,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
