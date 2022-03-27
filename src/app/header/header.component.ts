import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../Auth-Service/auth-service.service';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    logged_in_user:boolean= false;
  constructor(private authService:AuthServiceService, private router:Router) { }

  ngOnInit(): void {
    this.logged_in_user=this.authService.isUserLoggedIn();
    this.router.navigate(['dashboard']);
  }
        logout(){
          this.authService.LoggedOut();
        }
}
