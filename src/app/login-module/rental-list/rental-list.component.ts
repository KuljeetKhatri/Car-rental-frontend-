import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserComponentComponent } from '../user-component/user-component.component';

@Component({
  selector: 'app-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css'],
})
export class RentalListComponent implements OnInit {
  public records: any[] = [];
  public oldRecords: any[] = [];
  constructor(private router: Router, private http: HttpClient) {}

  getUserDetails() {
    const userId = localStorage.getItem('userId');

    this.http
      .get(`http://localhost:8082/reservation/${userId}`)
      .subscribe(
        (response: any) => {
          this.records = response;
          console.log('User Details:', this.records);
        },
        (error) => {
          console.error('Error fetching user details', error);
          // Handle error here, e.g., show a user-friendly message
        }
      );
  }

  getOldRecodes() {
    const userId = localStorage.getItem('userId');

    this.http.get(`http://localhost:8082/rental/${userId}`).subscribe(
      (response: any) => {
        this.oldRecords = response;
        console.log('User Details:', this.oldRecords);
      },
      (error) => {
        console.error('Error fetching user details', error);
        // Handle error here, e.g., show a user-friendly message
      }
    );
  }
  // calculateRent1(record: any): number {
  //   const start = new Date(record.startDate);
  //   const end = new Date(record.endDate);

  //   const timeDiff = Math.abs(end.getTime() - start.getTime());
  //   const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  //   if (diffDays != 0) {
  //     const rent = diffDays * record.rent;
  //     return rent;
  //   }
  //   return record.rent;
  // }


  // calculateRent(record: any): number {
  //   const start = new Date(record.startDate);
  //   const end = new Date(record.endDate);

  //   const timeDiff = Math.abs(end.getTime() - start.getTime());
  //   const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  //   if (diffDays != 0) {
  //     const rent = diffDays * record.rentPerDay;
  //     return rent;
  //   }
  //   console.log(record.rentPerDay);
  //   return record.rentPerDay;
  // }

  ngOnInit(): void {
    this.getUserDetails();
    this.getOldRecodes();
  }

  OnClickedRecodes() {
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/recodes']);
    });
  }

  OnClickedHome() {
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/user']);
    });
  }

  OnClickedFindCar() {
    this.router.navigateByUrl('/', { skipLocationChange: false }).then(() => {
      this.router.navigate(['/reservation']);
    });
  }
}
