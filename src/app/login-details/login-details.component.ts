import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NewLogin } from '../new-login';

@Component({
  selector: 'app-login-details',
  templateUrl: './login-details.component.html',
  styleUrls: ['./login-details.component.css']
})
export class LoginDetailsComponent implements OnInit {

  data_login = new NewLogin();

  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    alert("Login data is:" +this.data_login.userName);
  }
}

