import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeRegistration } from 'src/app/Helper/models/employeeRegistration';
import { EmployeesService } from 'src/app/Helper/services/employee/employees.service';
@Component({
  selector: 'app-employee-registration-popup',
  templateUrl: './employee-registration-popup.component.html',
  styleUrls: ['./employee-registration-popup.component.css']
})
export class EmployeeRegistrationPopupComponent implements OnInit {

  constructor(private service: EmployeesService ,public http:HttpClient,private formBuilder: FormBuilder) { }

  Form:FormGroup
  body:EmployeeRegistration
  ngOnInit() {
    this.createForm();
  }
  createForm() {
    this.Form = this.formBuilder.group({
      name: ["", [Validators.required]],
      fatherName: ["", [Validators.required]],
      email:["", [Validators.required]],
      personalEmail:[""],
      contactNumber:["", [Validators.required]],
      password:["", [Validators.required]],
      confirmPassword:["", [Validators.required]],
      biometricId:["", [Validators.required]],
      currentSalary:["", [Validators.required]],
      designation:["", [Validators.required]],
      status:["", [Validators.required]],
      joiningDate:["", [Validators.required]],
      emergencyNumber:["", [Validators.required]],
      profileImage:[""],
      cnic:["", [Validators.required]],
      shiftStart:["", [Validators.required]],
      shiftEnd:["", [Validators.required]],
     
    });
  }

  postEmployee()
  {
    this.body= this.Form.value;
    this.service.postEmployeee(this.body).subscribe( response => {
      console.log(response)
      
    },Error => {
      console.log(Error)
    });
  }

}
