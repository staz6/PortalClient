import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Attendance } from 'src/app/Helper/models/attendance/attendance';
import { baseurlAttendance } from 'src/app/Helper/models/base';
import { GetLeave } from 'src/app/Helper/models/attendance/getLeave';
import { LeaveHistory } from 'src/app/Helper/models/attendance/leaveHistory';
import { PostLeave } from 'src/app/Helper/models/attendance/postLeave';
import { AcceptLeave } from '../../models/attendance/acceptLeave';

@Injectable({
  providedIn: 'root'
})
export class AttendaceService {
  
  httpHeaders:any
  constructor(public http:HttpClient ) {
      let token = localStorage.getItem('token');
     this.httpHeaders= new HttpHeaders({
      'Authorization':`Bearer ${token}`
    })
    
    }

    getAttendance(userId:string)
    {
      
      return this.http.get<Attendance[]>(baseurlAttendance + "getAttendance/" + userId, {
        headers: this.httpHeaders
      } );
    }

    postLeave(postLeave : PostLeave)
    {
      
      return this.http.post<PostLeave>(baseurlAttendance+"postLeave",postLeave,{
        headers:this.httpHeaders
      }); 
     
    }
    getLeave(userId:string)
    {
      return this.http.get<GetLeave[]>(baseurlAttendance + "getLeave/" + userId, {
        headers: this.httpHeaders
      } );
    }
    getLeaveHistory(userId:string)
    {
      return this.http.get<LeaveHistory>(baseurlAttendance + "getLeaveHistory/"+userId,{
        headers:this.httpHeaders
      })
    }
    acceptLeave(id:number)
    {
      return this.http.put(baseurlAttendance +"approveLeave/"+id,null,{
        headers:this.httpHeaders
      })
    }
}
