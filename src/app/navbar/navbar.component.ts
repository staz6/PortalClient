import { Component, Input, OnInit } from '@angular/core';
import { Employee } from '../models/employee';
import { EmployeesService } from '../services/employee/employees.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  employee:Employee;
  appUserId:string;
  constructor(public service:EmployeesService) {

   }

  ngOnInit(): void {
    this.getUserDate();
  }
  getUserDate(){
    this.service.getDataId().subscribe(response => {
      this.appUserId = response.appUserId;
      console.log("Navbar user Id "+this.appUserId);
    })
  }

}
