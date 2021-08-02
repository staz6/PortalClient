import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomeComponent } from '../home/home.component';
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
  }

  postEmployeeInfo(){
    this.body = this.Form.value;

    this.service.postEditEmployeeInfo(this.body).subscribe(response => {
      console.log(response)
    })



  }

}
