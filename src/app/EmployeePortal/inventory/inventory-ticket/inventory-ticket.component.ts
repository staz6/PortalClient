import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GetInventory } from 'src/app/Helper/models/inventory/getInventory';
import { PostInventoryRequest } from 'src/app/Helper/models/inventory/postInventoryRequest';
import { InventoryRequestService } from 'src/app/Helper/services/inventory/inventory-request.service';
import { InventoryService } from 'src/app/Helper/services/inventory/inventory.service';

@Component({
  selector: 'app-inventory-ticket',
  templateUrl: './inventory-ticket.component.html',
  styleUrls: ['../../../app.component.css','./inventory-ticket.component.css']
})
export class InventoryTicketComponent implements OnInit {
  Form:FormGroup
  body:PostInventoryRequest;
  inventory:GetInventory[]=[];
  constructor(private service:InventoryRequestService,
    private inventoryService:InventoryService,private http:HttpClient,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.getInventory();
  }
  createForm() {
    this.Form = this.formBuilder.group({
      inventoryId: ["", [Validators.required]],
      subject: ["", [Validators.required]],
      description: ["", Validators.required],     
    });
  }

  getInventory(){
    this.inventoryService.getInventory().subscribe(response => {
        this.inventory=response
        console.log(this.inventory)
    })
  }
  postInventoryRequest(){
    this.body=this.Form.value;
    var userId=localStorage.getItem("id");
    if(userId!=null)
    {
      this.body.requestedBy=userId
    console.log(this.body);
    this.service.employeePostInventoryRequest(this.body).subscribe(response => {
      console.log(response)
    })
    }
    
  }

}
