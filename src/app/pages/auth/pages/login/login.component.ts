import { Component, OnInit } from '@angular/core';


import { FormGroup,FormControl,Validators } from '@angular/forms';

import{ApiService} from '../../../../services/api/api.service';
import{LoginI} from '../../../../model/login.interface';
import { ResponseI } from '@app/model/response.interface';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  loginForm = new FormGroup({
    email:new FormControl('',Validators.required),
    password:new FormControl('',Validators.required),
  })

  constructor(
    private api:ApiService,
    private router:Router
    ){}
    errorStatus:boolean=false;
    errorMSJ:any="";
  ngOnInit(): void {
      this.checkLocalSorage(); 
  }

  checkLocalSorage(){
    if(localStorage.getItem('token')){
      this.router.navigate(['dashboard']);
    }
  }

  /*
    onLogin() {
    const formValue = this.loginForm.value;
    console.log('Form Value:', formValue); // Check if the form value is correct
    const loginData: LoginI = {
      email: formValue.usuario as string,
      password: formValue.password as string,
    };
    console.log('Login Data:', loginData); // Check if the login data is correct



    this.api.loginByEmail(loginData).subscribe(
      response => {
        console.log('API Response:', response); // Log the full response
        // Handle the response as needed
      },
      error => {
        console.error('API Error:', error); // Log any errors
        // Handle the error as needed
      }
    );
  }*/
  onLogin(){
    const formValue = this.loginForm.value;
    console.log('Form Value:', formValue); // Check if the form value is correct
    const loginData: LoginI = {
      email: formValue.email as string,
      password: formValue.password as string,
    };
    this.api.loginByEmail(loginData).subscribe(data=>{
      console.log(data);
      let dataResponse:ResponseI=data;
      if(dataResponse.status === '200'){
 
          const token = dataResponse.result.token.access;
          localStorage.setItem("token", token);
          this.router.navigate(['dashboard']);
          //console.log("entre al if ", dataResponse);

      }
      else {
        this.errorStatus=true;
        this.errorMSJ=dataResponse.result.error;
        console.log("entre al else", dataResponse);
      }
    })
  }
 //    andreas5@andreas.com

 // Da1019016227*
  

}
