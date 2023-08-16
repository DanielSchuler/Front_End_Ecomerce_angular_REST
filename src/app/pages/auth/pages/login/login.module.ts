import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { loginRoutingModule } from './login-routing.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    loginRoutingModule,
    ReactiveFormsModule, 
    FormsModule
  ]
})
export class LoginModule { }
