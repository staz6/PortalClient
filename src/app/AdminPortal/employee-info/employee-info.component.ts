import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from 'src/app/services/employee/employees.service';
import { LeavePopupComponent } from '../../AdminPortal/employee-info/leave-popup/leave-popup.component'
import { AttendancePopupComponent } from './attendance-popup/attendance-popup.component';
import { InventoryPopupComponent } from './inventory-popup/inventory-popup.component';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['../../app.component.css','./employee-info.component.css']
})

export class EmployeeInfoComponent implements OnInit {
  
  displayedColumns: string[] = ['employee', 'designation', 'salary', 'contact', 'action'];
  dataSource: Employee[]=[];

  constructor(private service:EmployeesService, public dialog: MatDialog) {
    
   }

  ngOnInit(): void {
    this.getAllEmployeeInfo();
  }

  getAllEmployeeInfo(){
    this.service.getAllEmployeeInfo().subscribe(response => {
      this.dataSource=response;
      console.log(this.dataSource);

    })
  }
  openAttendanceDialog(userId:string){
    const dialogRef=this.dialog.open(AttendancePopupComponent);
    dialogRef.componentInstance.userId=userId;
  }
  openLeaveDialog() {
    const dialogRef = this.dialog.open(LeavePopupComponent);
    
  }
  openInventoryDialog(userId:string){
    const dialogRef = this.dialog.open(InventoryPopupComponent)
    dialogRef.componentInstance.userId=userId;
  }
}
