import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginModuleRoutingModule } from './login-module-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { SidebarComponent } from '../component/sidebar/sidebar.component';
import { ComponentModule } from '../component/component.module';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { FormsModule } from '@angular/forms';
import { UserComponentComponent } from './user-component/user-component.component';
import { PartnerComponentComponent } from './partner-component/partner-component.component';
import { HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CarListComponentComponent } from './car-list-component/car-list-component.component';
import { TempCarListComponent } from './temp-car-list/temp-car-list.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { ReservationComponent } from './reservation/reservation.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CarReservationComponent } from './car-reservation/car-reservation.component';




@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    LoginPageComponent,
    HomeComponentComponent,
    AdminComponentComponent,
    UserComponentComponent,
    PartnerComponentComponent,
    CarListComponentComponent,
    TempCarListComponent,
    RentalListComponent,
    ReservationComponent,
    CarReservationComponent,

  ],
  imports: [
    CommonModule,
    LoginModuleRoutingModule,
    ComponentModule,
    FormsModule,
    HttpClientModule,
  ]
})
export class LoginModuleModule { }
