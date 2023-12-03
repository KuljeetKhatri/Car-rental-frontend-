import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-car-reservation',
  templateUrl: './car-reservation.component.html',
  styleUrls: ['./car-reservation.component.css']
})

export class CarReservationComponent implements OnInit{
  private split: any;
  public cars: any[] =[];

  constructor(private sharedService: SharedService, private router:Router, private http: HttpClient){}

  ngOnInit(): void {
      this.getModelCar();
  }

  getModelCar() {
    this.split  = this.sharedService.selectedVehicle?.split(" ");
    console.log(this.split[0]);
    console.log( this.split[1])
    console.log(this.sharedService.startDate);
    console.log(this.sharedService.endDate);
    const loginData = {
      brand: this.split[0],
      model: this.split[1]
    };
    this.http.post('http://localhost:8082/car/car',loginData).subscribe(
      (response: any) => {
        this.cars = response;
        console.log(response);
      },
      (error) => {
        console.error('Error fetching cars', error);
      }
    );

    console.log(this.cars);
  }

  OnClickedRecodes(){
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/records']);
    });
  }

  OnClickedHome(){
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/user']);
    });
  }
  OnClickedFindCar(){
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/reservation']);
    });
  }

  OnCickedRent(carid: any){

    console.log(this.sharedService.startDate  , this.sharedService.endDate)
    console.log(this.sharedService);
    const loginResservationData = {
      startDate:this.sharedService.startDate,
      endDate:this.sharedService.endDate,
      rent:null,
    };
    console.log(loginResservationData);
    this.http.post(`http://localhost:8082/reservation/${localStorage.getItem("adminId")}/${carid}`, loginResservationData).subscribe(
      (response: any) => {
        console.log(response);
        this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
          this.router.navigate(['/recodes']);
        });

      },
      (error) => {
        console.error('Error fetching cars', error);
      }
    );

  }
}
