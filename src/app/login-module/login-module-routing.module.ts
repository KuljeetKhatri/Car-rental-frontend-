import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { PartnerComponentComponent } from './partner-component/partner-component.component';
import { CarListComponentComponent } from './car-list-component/car-list-component.component';
import { TempCarListComponent } from './temp-car-list/temp-car-list.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CarReservationComponent } from './car-reservation/car-reservation.component';

const routes: Routes = [

{
      path: "login",
      component: LoginPageComponent,
      // canActivate: [LoggedInGuard, AuthorizationGuard],
      // data: { permission: 'D'},

    },
{
      path: "home",
      component: HomeComponentComponent,
      // canActivate: [LoggedInGuard, AuthorizationGuard],
      // data: { permission: 'D'},

    },

    {
      path: "admin",
      component: AdminComponentComponent,
      // canActivate: [LoggedInGuard, AuthorizationGuard],
      // data: { permission: 'D'},

    },

    {
      path: "user",
      component: UserComponentComponent,
      // canActivate: [LoggedInGuard, AuthorizationGuard],
      // data: { permission: 'D'},

    },

    {
      path: "partner",
      component: PartnerComponentComponent  ,
      // canActivate: [LoggedInGuard, AuthorizationGuard],
      // data: { permission: 'D'},

    },
    {
      path: "car-list",
      component: CarListComponentComponent  ,
      // canActivate: [LoggedInGuard, AuthorizationGuard],
      // data: { permission: 'D'},

    },

    {
      path: "approve",
      component: TempCarListComponent ,
      // canActivate: [LoggedInGuard, AuthorizationGuard],
      // data: { permission: 'D'},

    },
    
    {
      path: "recodes",
      component: RentalListComponent ,
      // canActivate: [LoggedInGuard, AuthorizationGuard],
      // data: { permission: 'D'},

    },
    
    {
      path: "reservation",
      component: ReservationComponent ,
      // canActivate: [LoggedInGuard, AuthorizationGuard],
      // data: { permission: 'D'},

    },

    {
      path: "findCar",
      component: CarReservationComponent,
      // canActivate: [LoggedInGuard, AuthorizationGuard],
      // data: { permission: 'D'},

    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginModuleRoutingModule { }