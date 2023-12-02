import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit{
  constructor(private router: Router, private http: HttpClient){}
  public user:{
    firstName:String;
    lastName:String;
    userName:String;
    password:String;
    email:String ;
    phone:String;
    license_number:String;
  }={
    firstName: '' ,
    lastName: '' ,
    userName: '' ,
    password: '' ,
    email: ''  ,
    phone: '' ,
    license_number: '' ,
  };



  ngOnInit(): void {
      console.log(this.user);
  }

  userRegistration(){
    this.http.post(`http://localhost:8082/user`,this.user).subscribe(
      (response: any)=>{
        console.log(response);
        // if(response === "Email already exists"){

        // }
      }
    )
  }

  submitClick(){
    console.log(this.user);
    this.userRegistration();
  }
  // openDialog(dialogType: string) {
  //   this.dialog.open(DialogBoxComponent, {
  //     width: '400px',
  //     data: { dialogType }
  //   });
  // }
 

}
