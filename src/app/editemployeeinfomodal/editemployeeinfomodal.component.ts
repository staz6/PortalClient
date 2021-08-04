import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
import { Employee } from '../models/employee';
import { postEmployeeInfo } from '../models/postEmployeeInfo';
import { EmployeesService } from '../services/employee/employees.service';

@Component({
  selector: 'app-editemployeeinfomodal',
  templateUrl: './editemployeeinfomodal.component.html',
  styleUrls: ['./editemployeeinfomodal.component.css']
})
export class EditemployeeinfomodalComponent implements OnInit {
  Form:FormGroup
  body:postEmployeeInfo;
  employee: Employee;
  constructor(public service:EmployeesService,public http:HttpClient,private formBuilder: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.Form = this.formBuilder.group({
      personalEmail: ["", [Validators.required]],
      contactNumber: ["", [Validators.required]],
      emergencyNumber: ["", Validators.required],
      address : ["",Validators.required]
    });
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.getDataId().subscribe((data)=>{
      this.employee=data;
      console.log(this.employee);
    })
}

  postEmployeeInfo(){
    this.body = this.Form.value;

    this.service.postEditEmployeeInfo(this.body).subscribe(response => {
      console.log(response)
    })



  }

}
