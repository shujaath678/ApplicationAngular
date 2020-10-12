import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authenticationService';


const credentials = [
  {
    "username":"username",
    "password":"password"
  },
  {
    "username":"test",
    "password":"test"
  },
  {
    "username":"dummyuser",
    "password":"dummypwd"
  }
];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  

  constructor(private formBuilder: FormBuilder, public router: Router, private authenticationService : AuthenticationService) {

   }

  ngOnInit() {
  }

  onSubmit(){
    console.log('userloginDetails',this.loginForm.value);
    for(let i =0; i< credentials.length ; i++){
      if(credentials[i].username == this.loginForm.value.username && credentials[i].password == this.loginForm.value.password){
        this.authenticationService.isUserAuthenticated = true;
        break;
      }
    }
    if(this.authenticationService.isUserAuthenticated == true)
      this.router.navigate(['search']);
    else  
      alert('Invalid user');
  }

}
