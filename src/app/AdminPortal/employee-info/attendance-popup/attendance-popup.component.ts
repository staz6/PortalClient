import { Component, Input, OnInit } from '@angular/core';
import { Attendance } from 'src/app/models/attendance/attendance';
import { AttendaceService } from 'src/app/services/attendace/attendace.service';

@Component({
  selector: 'app-attendance-popup',
  templateUrl: './attendance-popup.component.html',
  styleUrls: ['./attendance-popup.component.css']
})

export class AttendancePopupComponent implements OnInit {
  @Input() public userId:any;
  displayedColumns: string[] = ['date', 'shiftTiming', 'checkIn', 'checkOut','workedHours','effectiveHours','status'];
  dataSource: Attendance[]=[];
  constructor(private service:AttendaceService) { }

  ngOnInit(): void {
    this.getAttendance(this.userId);
  }
  getAttendance(userId:string){
    this.service.getAttendance(userId).subscribe(response => {
      this.dataSource=response;
      console.log(this.dataSource)
    })
  }

}
