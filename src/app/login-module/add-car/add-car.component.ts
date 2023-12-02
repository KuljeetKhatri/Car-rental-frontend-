import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartnerSharedServiceService } from '../partner-shared-service.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit{

  constructor(private http: HttpClient, private router: Router, private partnerShared: PartnerSharedServiceService){}
  public CarDetais:{
    brand: string;
    color: string;
    model: string;
    registrationNumber: string;
    year: number;
  }= {
    brand: '',
    model: '',
    year: 0,
    color: '',
    registrationNumber: ''
};




  ngOnInit(): void {
  }


  addCarButton(){
    const partnerId = this.partnerShared.partnerId;
    this.http.post(`http://localhost:8082/tempCar/${partnerId}`,this.CarDetais).subscribe(
      (response:any)=>{
        console.log(response);
      }
    )
  };


  addCar(){
    this.router.navigate(['/addCar']);
  }
  
  homeClick(){
    this.router.navigate(["/partner"]);
  }
  
  approvedCarClick(){
    this.router.navigate(["/approvedCar"]);
  }
  

}
