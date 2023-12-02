import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentModule } from './component/component.module';
// import { AdminComponentComponent } from './login-modual/admin-component/admin-component.component';
import { FormsModule } from '@angular/forms';
import { SharedService } from './shared.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    // AdminComponentComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [SharedService],
  bootstrap: [AppComponent],

})
export class AppModule { }
