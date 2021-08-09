import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetInventory } from 'src/app/models/inventory/getInventory';
import { InventoryService } from 'src/app/services/inventory/inventory.service';
import {InventoryUpdatePopupComponent} from '../inventory/inventory-update-popup/inventory-update-popup.component'
import { InventoryCreatePopupComponent } from './inventory-create-popup/inventory-create-popup.component';





@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['../../app.component.css','./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  displayedColumns: string[] = ['item', 'quantity', 'description','action'];
  dataSource:GetInventory[]=[];

  constructor(private service:InventoryService, public dialog:MatDialog) { }

  ngOnInit(): void {
    this.getInventory()
  }

  getInventory(){
    this.service.getInventory().subscribe(response => {
      this.dataSource=response
    },Error => {
      console.log(Error.message)
    })
  }
  deleteInventory(id:number){
    this.service.deleteInventory(id).subscribe(response => {
      console.log(response)
      this.getInventory();
    },Error => {
      console.log(Error.message)
    })
  }
  inventoryQuantity(id:number,value:boolean){
    this.service.inventoryQuantity(id,value).subscribe(response => {
      this.getInventory();
    })
  }


  openUpdate(id:number) {
    const dialogRef = this.dialog.open(InventoryUpdatePopupComponent);
    dialogRef.componentInstance.inventoryId=id;
    dialogRef.afterClosed().subscribe(result => {
      this.getInventory();
    });
  }
  inventoryCreateDialog(){
    const dialogRef = this.dialog.open(InventoryCreatePopupComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      this.getInventory();
    });
  }
}
