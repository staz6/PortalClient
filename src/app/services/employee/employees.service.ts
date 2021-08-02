import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseurl } from 'src/app/models/base';
import { postEmployeeInfo } from 'src/app/models/postEmployeeInfo';



@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  httpHeaders:any
  constructor(public http:HttpClient ) {
      let test = localStorage.getItem('token');
     this.httpHeaders= new HttpHeaders({
      'Authorization':`Bearer ${test}`
    })
    }

    getDataId(){
    console.log( this.httpHeaders);
    return this.http.get<Employee>(baseurl +'getCurrentUser',{
      headers: this.httpHeaders
    })
  }
  postEditEmployeeInfo(employeeInfo:postEmployeeInfo){
    return this.http.post<postEmployeeInfo>(baseurl +'editemployee',employeeInfo,{
      headers: this.httpHeaders
    })
  }


}
