import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  currentUser: any;
  name: any;
  email: any;
  gender: any;
  mobile: any;
  image: any;
  
  constructor(
    private router: Router,
  ) { }

    //get details of logged in user
    userDetails()
    {
      if(localStorage.getItem('currentUser'))
      {
      this.name = JSON.parse(this.currentUser).objects[0].metafields[0].value;
      this.email = JSON.parse(this.currentUser).objects[0].metafields[1].value;
      this.gender = JSON.parse(this.currentUser).objects[0].metafields[3].value;
      this.mobile = JSON.parse(this.currentUser).objects[0].metafields[4].value;
      this.image = "./../../../assets/pictures/cosmic_js_logo.jpg" 
      }
      else if(localStorage.getItem('googleUser'))
      {
        console.log(JSON.parse(localStorage.getItem('googleUser')))
      this.name = JSON.parse(localStorage.getItem('googleUser')).objects[0].metafields[0].value;
      this.email = JSON.parse(localStorage.getItem('googleUser')).objects[0].metafields[1].value;
      this.gender = JSON.parse(localStorage.getItem('googleUser')).objects[0].metafields[3].value;
      this.mobile = JSON.parse(localStorage.getItem('googleUser')).objects[0].metafields[4].value;
      this.image = JSON.parse(localStorage.getItem('googleUser')).objects[0].metafields[5].value;
      }
      
    }

    //logging user out
    logout()
    {
     if(this.currentUser)
     {
       localStorage.removeItem('currentUser');  
       this.router.navigate([''])    
     }
     else if(localStorage.getItem('googleUser'))
     {
      localStorage.removeItem('googleUser');  
      this.router.navigate([''])
     }      
    }


  ngOnInit() {
   this.currentUser = localStorage.getItem('currentUser');
   if(!localStorage.getItem('currentUser') && !localStorage.getItem('googleUser'))
   {
    this.router.navigate([''])
   }
   this.userDetails();
  }

}
