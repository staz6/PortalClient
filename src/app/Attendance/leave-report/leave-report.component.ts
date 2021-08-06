import { Component, OnInit } from '@angular/core';
import { LeaveHistory } from 'src/app/models/attendance/leaveHistory';
import { AttendaceService } from 'src/app/services/attendace/attendace.service';

@Component({
  selector: 'app-leave-report',
  templateUrl: './leave-report.component.html',
  styleUrls: ['./leave-report.component.css']
})
export class LeaveReportComponent implements OnInit {
  leaveHistory :LeaveHistory;
  
  constructor(private service:AttendaceService) { }

  ngOnInit(): void {
    const userId=localStorage.getItem("id")
    if(userId!=null) this.getLeaveHistory(userId);
  }
  
  getLeaveHistory(userId:string){
    this.service.getLeaveHistory(userId).subscribe(response => {
      this.leaveHistory=response
    });
  }

}
