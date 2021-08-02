import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../services/employee/employees.service';
import { Employee } from '../models/employee';
import { postEmployeeInfo } from '../models/postEmployeeInfo';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { EditemployeeinfomodalComponent } from '../editemployeeinfomodal/editemployeeinfomodal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  employee: Employee;
  admin:Employee;
  content:any;

  constructor(

    public service:EmployeesService,public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
      this.service.getDataId().subscribe((data)=>{
        this.employee=data;

          // console.log(this.content)
      })
  }

  openDialog() {
    const dialogRef = this.dialog.open(EditemployeeinfomodalComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.getData();
    });
  }

}




