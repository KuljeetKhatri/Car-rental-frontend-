import { HttpClient } from '@angular/common/http';
import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponentComponent implements OnInit{

  constructor(private router: Router, private http: HttpClient){}
  userDetails: any = {}

  getUserDetails() {
    const userId = localStorage.getItem('adminId');

    if (userId) {
      this.http.get(`http://localhost:8082/user/${userId}`).subscribe(
        (response: any) => {
          this.userDetails = response;
          console.log('User Details:', this.userDetails);
          localStorage.setItem("userId",response.id);
        },
        (error) => {
          console.error('Error fetching user details', error);
          // Handle error here, e.g., show a user-friendly message
        }
      );
    } else {
      console.error('UserId is null. Handle this case appropriately.');
      // Handle the case where adminId is null, e.g., redirect to login
    }
  }

  OnClickedRecodes(){
    console.log("helo");
    localStorage.setItem("userid",this.userDetails.firstName);
    console.log(localStorage.getItem("userId"));
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

  ngOnInit(): void {
    this.getUserDetails();
    // this.OnClickedRecodes()
      
  }
}
