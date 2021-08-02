import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Attendance } from '../models/attendance';
import { AttendaceService } from '../services/attendace/attendace.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];



@Component({
  selector: 'app-employee-salary',
  templateUrl: './employee-salary.component.html',
  styleUrls: ['./employee-salary.component.css']
})
export class EmployeeSalaryComponent implements OnInit {
  attendance:Attendance[]=[];
  displayedColumns: string[] = ['date', 'shiftTiming', 'checkIn', 'checkOut','workedHours','effectiveHours'];
  // dataSource = ELEMENT_DATA;
  constructor(private service:AttendaceService,private route: ActivatedRoute) {


   }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const userId = routeParams.get('userId');
    if(userId != null)
    {
      this.getAttendance(userId);
    }

  }

  getAttendance(userId:string){
    this.service.getAttendance(userId).subscribe(response => {
      this.attendance=response;
      console.log(this.attendance)
    })
  }

}
