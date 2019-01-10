import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ApicallService } from './../../services/apicall.service';
import { Router } from '@angular/router';
import {
  AuthService,
  GoogleLoginProvider,
} from 'angular-6-social-login-v2';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  loginForm: FormGroup; //declare the reactive forms group for login
  registerDiv = false; //keep the register div hidden untill called
  loginDiv = true;  //keep the login div visible by default
  returnedData: any;
  message: any;
  loading = "";
  googleData: any;
  returnedData2: any;
  finalData: any;

  constructor(
    private _http: Http,
    private fb: FormBuilder,
    private userService: ApicallService,
    private router: Router,
    private socialAuthService: AuthService
     ) 
  {
    this.loginForm = this.fb.group({
      'email': ['',[Validators.email, Validators.required ]],
      'password': ['', Validators.required],
    });    
  }

  //login function
  login()
  {
    this.loading = "loading...";
    const credentials = this.loginForm.value;
    credentials.password = Base64.encode(credentials.password)
    this.userService.login(credentials)
    .subscribe((result)=>{
      this.loading = "";
      this.returnedData = result;
      var jsondata = JSON.parse(this.returnedData._body);
      if (jsondata.message == "No objects returned.") {
      this.message = "Email or password don't matched";
      return;
      }
      else if(credentials.password == jsondata.objects[0].metadata.password )
      {
        localStorage.setItem('currentUser', JSON.stringify(jsondata));
        this.router.navigate(['dashboard']);
      }
      else
      {
        this.message = "Password is wrong!!";
      }
    })
  }

  //register call
  registerCall()
  {
    this.router.navigate(['register'])
    }    

    //login with Google
    public socialSignIn(socialPlatform : string) {
      let socialPlatformProvider;
       if(socialPlatform == "google"){
        socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
       }
       this.socialAuthService.signIn(socialPlatformProvider).then(
        (userData) => {
          console.log(socialPlatform+" sign in data : " , userData);

          //check Google account previously logged in any time?
          this.loading = "loading...";
          this.userService.checkGoogleUser(userData)
          .subscribe((res)=>{
            
      this.returnedData = res;
      var jsondata = JSON.parse(this.returnedData._body);
      console.log(jsondata);
      if (jsondata.message == "No objects returned.") {

        //if google user is new
        this.userService.googleRegister(userData)
          .subscribe((result)=>
          {
            this.userService.checkGoogleUser(userData) //get user's details to store in local storage
            .subscribe((res)=>{
              this.loading = "";
              this.finalData = res;
             var jsondata = JSON.parse(this.finalData._body);
             localStorage.setItem('googleUser', JSON.stringify(jsondata));
             this.router.navigate(['dashboard']);
            })
          })          
      }
      else {
           this.loading = "";
           localStorage.setItem('googleUser', JSON.stringify(jsondata));
            this.router.navigate(['dashboard']);      
      }
          })               
        }
      );
      }


  ngOnInit() {
    if(localStorage.getItem('currentUser') || localStorage.getItem('googleUser') )
    {
      this.router.navigate(['dashboard'])
    }
  }

}
