import { Component, Input, OnInit } from '@angular/core';
import { GetInventoryRequest } from 'src/app/models/inventory/getInventoryRequest';
import { InventoryRequestService } from 'src/app/services/inventory/inventory-request.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];



@Component({
  selector: 'app-leave-popup',
  templateUrl: './leave-popup.component.html',
  styleUrls: ['./leave-popup.component.css']
})
export class LeavePopupComponent implements OnInit {
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

}
