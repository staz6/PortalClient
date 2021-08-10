import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseurlInventoryRequest } from 'src/app/models/base';
import { PostInventoryRequest } from 'src/app/models/inventory/postInventoryRequest';

@Injectable({
  providedIn: 'root'
})
export class InventoryRequestService {

  httpHeaders:any
  constructor(public http:HttpClient ) {
      let test = localStorage.getItem('token');
     this.httpHeaders= new HttpHeaders({
      'Authorization':`Bearer ${test}`
    })
    }
  employeePostInventoryRequest(body:PostInventoryRequest){
    return this.http.post(baseurlInventoryRequest+ "inventoryRequest",body,{
      headers:this.httpHeaders
    })
  }
}
