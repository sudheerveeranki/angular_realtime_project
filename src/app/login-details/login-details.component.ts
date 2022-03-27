import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Auth-Service/auth-service.service';
import { NewLogin } from '../new-login';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {
    userName='';
    password='';
    login_data = new NewLogin();

  constructor(private authService:AuthServiceService) { }

  ngOnInit(): void {
  }
  submit(){
    this.authService.login(this.userName,this.password);
  }
}

