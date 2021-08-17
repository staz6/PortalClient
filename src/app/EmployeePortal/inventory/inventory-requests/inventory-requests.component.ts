import { Component, OnInit } from '@angular/core';
import { GetInventoryRequest } from 'src/app/Helper/models/inventory/getInventoryRequest';
import { InventoryRequestService } from 'src/app/Helper/services/inventory/inventory-request.service';

@Component({
  selector: 'app-inventory-requests',
  templateUrl: './inventory-requests.component.html',
  styleUrls: ['./inventory-requests.component.css']
})
export class InventoryRequestsComponent implements OnInit {

  constructor(private service:InventoryRequestService) { }
  inventory:GetInventoryRequest[]=[];
  ngOnInit(): void {
    const userId=localStorage.getItem("id")
    if(userId!==null)
    {
      this.getInventoryRequest(userId);
    }
  }

  getInventoryRequest(userId:string)
  {
    this.service.employeeGetInventoryRequest(userId).subscribe(response => {
      this.inventory=response
      console.log(this.inventory)
    })
  }

}
