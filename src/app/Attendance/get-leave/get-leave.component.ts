import { Component, OnInit } from '@angular/core';
import { GetLeave } from 'src/app/models/attendance/getLeave';
import { AttendaceService } from 'src/app/services/attendace/attendace.service';

@Component({
  selector: 'app-get-leave',
  templateUrl: './get-leave.component.html',
  styleUrls: ['./get-leave.component.css']
})
export class GetLeaveComponent implements OnInit {
  leave:GetLeave[]=[];
  constructor(private service:AttendaceService) { }

  ngOnInit(): void {
    const userId=localStorage.getItem("id")
    if(userId != null)
    {
      this.getLeave(userId);
    }
  }

  getLeave(userId:string){
    this.service.getLeave(userId).subscribe(response => {
      this.leave=response;
      console.log(this.leave)
    })
  }

}
