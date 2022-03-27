import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { FormsModule } from '@angular/forms';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { EmployeesComponent } from './employees/employees.component';
import { AuthServiceService } from './Auth-Service/auth-service.service';
import { AuthGuardService } from './Auth-Service/auth-service-guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginDetailsComponent,
    RegistrationDetailsComponent,
    DashboardComponent,
    HeaderComponent,
    FooterComponent,
    ParentComponent,
    ChildComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuardService,AuthServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
