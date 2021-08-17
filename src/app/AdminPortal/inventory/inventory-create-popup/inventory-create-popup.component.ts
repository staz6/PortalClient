import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InventoryPost } from 'src/app/Helper/models/inventory/inventorypost';
import { InventoryService } from 'src/app/Helper/services/inventory/inventory.service';


@Component({
  selector: 'app-inventory-create-popup',
  templateUrl: './inventory-create-popup.component.html',
  styleUrls: ['../../../app.component.css','./inventory-create-popup.component.css' ]
})
export class InventoryCreatePopupComponent implements OnInit {

  Form:FormGroup
  body:InventoryPost
  constructor(private service:InventoryService,public http:HttpClient,private formBuilder: FormBuilder) {
    
   }
   createForm() {
    this.Form = this.formBuilder.group({
      item: ["", [Validators.required]],
      quantity: ["", [Validators.required]],
      description: ["", Validators.required],
    });
  }

  ngOnInit(): void {
    this.createForm()
  }

  postInventory(){
    this.body = this.Form.value;
    
    this.service.postInventory(this.body).subscribe(response => {
    }, (Error) => console.log(Error.message))
  }

}
