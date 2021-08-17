import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetInventory } from 'src/app/Helper/models/inventory/getInventory';
import { InventoryPost } from 'src/app/Helper/models/inventory/inventorypost';
import { InventoryService } from 'src/app/Helper/services/inventory/inventory.service';

@Component({
  selector: 'app-inventory-update-popup',
  templateUrl: './inventory-update-popup.component.html',
  styleUrls: ['../../../app.component.css','./inventory-update-popup.component.css']
})

export class InventoryUpdatePopupComponent implements OnInit {
  @Input() public inventoryId:number;
  body:GetInventory;
  Form:FormGroup
  constructor(private service:InventoryService,private formBuilder: FormBuilder) { }
  createForm() {
    this.Form = this.formBuilder.group({
      item: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      description: ["", Validators.required],
    });
  }
  ngOnInit(): void {
    this.getInventory(this.inventoryId)
    this.createForm()
  }

  getInventory(id:number){
    this.service.getInventoryById(id).subscribe(response => {
      this.body=response
      
    })
  }
  updateInventory(){
    this.body=this.Form.value;
    console.log(this.body);
    this.service.updateInventory(this.inventoryId,this.body).subscribe(response => {
      console.log(response)
    })
  }
}
