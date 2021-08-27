import { Component, Input, OnInit } from '@angular/core';
import { AcceptLeave } from 'src/app/Helper/models/attendance/acceptLeave';
import { GetLeave } from 'src/app/Helper/models/attendance/getLeave';
import { GetInventoryRequest } from 'src/app/Helper/models/inventory/getInventoryRequest';
import { AttendaceService } from 'src/app/Helper/services/attendace/attendace.service';
import { InventoryRequestService } from 'src/app/Helper/services/inventory/inventory-request.service';






@Component({
  selector: 'app-leave-popup',
  templateUrl: './leave-popup.component.html',
  styleUrls: ['./leave-popup.component.css']
})
export class LeavePopupComponent implements OnInit {
  @Input() public userId:any;
  displayedColumns: string[] = ["from",'till', 'reason',  'leaveType',"status","action"];
  dataSource:GetLeave[]=[];

  constructor(private service:AttendaceService) { }
  body:AcceptLeave={deductSalary:false,status:false}
  ngOnInit(): void {
    this.getInventory(this.userId);
  }

  getInventory(userId:string){
    this.service.getLeave(userId).subscribe(response => {
      this.dataSource=response;
      console.log(response)
    })
  }
  acceptLeave(id:number){
    console.log("acceptLeave")
    this.service.acceptLeave(id).subscribe(response => {
      console.log(response);
      this.getInventory(this.userId);
    },Error => {
      console.log(Error)
    })
  }

}
