import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginDetailsComponent } from './login-details/login-details.component';
import { RegistrationDetailsComponent } from './registration-details/registration-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
  {
    path:'login',
    component:LoginDetailsComponent
  },
  {
    path:'registration',
    component:RegistrationDetailsComponent
  },
    {
      path:'',
      component: DashboardComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
