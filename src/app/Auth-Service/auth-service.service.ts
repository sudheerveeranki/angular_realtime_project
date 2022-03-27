import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private isLoggedIn : boolean;
  private userName : string | undefined;


  constructor(private route:Router) {
    if(localStorage.getItem('user')){
         this.isLoggedIn=true;
    }
    else{
      this.isLoggedIn=false;
    }
  }
  login(username: string, password:string){
    this.isLoggedIn=true;
    this.userName= username;
    localStorage.setItem('user',this.userName);
    window.location.reload();
    this.route.navigate(['dashboard']);
    return this.isLoggedIn;
  }
  isUserLoggedIn():boolean {
     return this.isLoggedIn;
  }
  LoggedOut(): void{
    this.isLoggedIn=false;
    localStorage.clear();
    this.route.navigate(['login']);
  }
}
