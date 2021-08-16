import { Component, Input, OnInit } from '@angular/core';
import { GetInventoryRequest } from 'src/app/models/inventory/getInventoryRequest';
import { InventoryRequestService } from 'src/app/services/inventory/inventory-request.service';

@Component({
  selector: 'app-inventory-popup',
  templateUrl: './inventory-popup.component.html',
  styleUrls: ['./inventory-popup.component.css']
})
export class InventoryPopupComponent implements OnInit {
  @Input() public userId:any;
  displayedColumns: string[] = ["inventoryName",'subject', 'description',  'date',"dateApproved","status","returned","action"];
  dataSource:GetInventoryRequest[]=[];
  constructor(private service:InventoryRequestService) { }

  ngOnInit(): void {
    this.getInventory(this.userId);
  }
  getInventory(userId:string){
    this.service.employeeGetInventoryRequest(userId).subscribe(response => {
      this.dataSource=response;
      console.log(this.dataSource)
    })
  }
  approvedInventory(id:number){
    console.log("approved")
    this.service.employeeApprovedInventory(id).subscribe(response => {
      console.log(response)
      this.getInventory(this.userId);
    },Error => {
      console.log(Error)
    })
  }
  returnedInventory(id:number){
    this.service.employeeReturnedInventory(id).subscribe(response => {
      this.getInventory(this.userId);
    })
  }

}
