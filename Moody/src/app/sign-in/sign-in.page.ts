import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavparamService } from '../navparam.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  name:string
  username:string
  password:string
  
  constructor(private router: Router, private navParamService: NavparamService) { }

  ngOnInit() {
  }
  
  // When sign in button is clicked 
  signInClick(){
    console.log(this.name)
    let userData = {
      "name": this.name,
      "username": this.username,
      "password": this.password
    }
    // Sending it to profile via the service I created
    this.navParamService.setNavData(userData);
  }


}

