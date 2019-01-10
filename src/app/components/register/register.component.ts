import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { userModel } from './../../models/user.model';
import { Router } from '@angular/router';
import { ApicallService } from './../../services/apicall.service';
import { Base64 } from 'js-base64';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup; //declare the reactive forms group for register
  passwordMatched: boolean = false;
  userModel = new userModel();
  selectedGender: any;
  returnedData: any;
  message: any;
  loading = "";

  constructor(
    private fb: FormBuilder,
    private userService: ApicallService,
    private router: Router
  ) 
  {
    this.registerForm = this.fb.group({
      'fullName': ['', Validators.required],
      'password': ['', [Validators.pattern('^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$'), Validators.required]],
      'confirmPassword': ['', Validators.required],
      'email': ['',[Validators.email, Validators.required ]],
      'mobile': ['',[Validators.minLength(10), Validators.required ]]
      
    });
   }

   //method to register the user
   register()
  {
  this.loading = "loading...";
    const data = this.registerForm.value;
    data.gender = this.selectedGender;
    data.password = Base64.encode(data.password);
    this.userService.login(data)
    .subscribe(res => {
      this.loading = "";
      this.returnedData = res;
      var jsondata = JSON.parse(this.returnedData._body);
      console.log(jsondata);
      if (jsondata.message == "No objects returned.") {
        this.userService.register(data)
          .subscribe(res => {
            console.log(res); 
            this.message = "Registered successfully, login now";         
          })        
      }
      else {
        this.message = "Email already exists";       
      }
    })
  }

    //selected value of gender
    gender(value)
    {
      this.selectedGender = value;
    }

    //check the password and confirm password before submit
    checkPasswordMatch(password)
    {
      if(password == this.userModel.confirmPassword)
      {
        this.passwordMatched = true;
      }
      else
      {
        this.passwordMatched = false;
      }
    }

    checkConfirmPasswordMatch(confirmedPassword)
    {
      if(confirmedPassword == this.userModel.password)
      {
        this.passwordMatched = true;
      }
      else
      {
        this.passwordMatched = false;
      }
    }

    //call login page
    loginCall()
    {
      this.router.navigate([''])
    }

  ngOnInit() {
  }

}
