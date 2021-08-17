import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetSalaryHistory } from 'src/app/Helper/models/salary/getSalaryHistory';
import {  baseurlSalary } from 'src/app/Helper/models/base';
import { SalarySlip } from 'src/app/Helper/models/salary/salarySlip';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {

  httpHeaders:any
  constructor(public http:HttpClient ) {
      let test = localStorage.getItem('token');
     this.httpHeaders= new HttpHeaders({
      'Authorization':`Bearer ${test}`
    })
    }
  getSalary(userId:string){
    return this.http.get<GetSalaryHistory[]>(baseurlSalary + "salary/"+userId,{
      headers:this.httpHeaders
    })
  }

  getSalarySlip(id:string){
    return this.http.get<SalarySlip>(baseurlSalary +"salarySlip/"+id,{
      headers:this.httpHeaders
    })
  }
}
