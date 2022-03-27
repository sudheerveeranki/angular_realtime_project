import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ParentComponent } from './parent/parent.component';
import { EmployeesComponent } from './employees/employees.component';
import { AuthGuardService } from './Auth-Service/auth-service-guard';
const routes: Routes = [
  {
    path:'login',
    component:LoginDetailsComponent
  },
  {
    path:'registration',
    component:RegistrationDetailsComponent,
    canActivate:[AuthGuardService]
  },
    {
      path:'dashboard',
      component: DashboardComponent,
      canActivate:[AuthGuardService]

    },
    {
      path:'parent',
      component: ParentComponent,
      canActivate:[AuthGuardService]
    },
    {
      path:'employee',
      component:EmployeesComponent,
      canActivate:[AuthGuardService]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
