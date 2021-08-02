import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from 'src/app/models/attendance';
import { baseurlAttendance } from 'src/app/models/base';

@Injectable({
  providedIn: 'root'
})
export class AttendaceService {

  httpHeaders:any
  constructor(public http:HttpClient ) {
      let test = localStorage.getItem('token');
     this.httpHeaders= new HttpHeaders({
      'Authorization':`Bearer ${test}`
    })
    
    }

    getAttendance(userId:string)
    {
      return this.http.get<Attendance[]>(baseurlAttendance + "getAttendance/" + userId, {
        headers: this.httpHeaders
      } );
    }
}
