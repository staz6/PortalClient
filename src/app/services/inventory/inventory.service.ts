import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseurlAttendance, baseurlInventory } from 'src/app/models/base';
import { GetInventory } from 'src/app/models/inventory/getInventory';
import { InventoryPost } from 'src/app/models/inventory/inventorypost';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  
  httpHeaders:any
  constructor(public http:HttpClient ) {
      let test = localStorage.getItem('token');
     this.httpHeaders= new HttpHeaders({
      'Authorization':`Bearer ${test}`
    })
    }
  
    postInventory(body:InventoryPost)
    {
      return this.http.post(baseurlInventory+"inventory",body,{
        headers:this.httpHeaders
      })
    }
    getInventory()
    {
      return this.http.get<GetInventory[]>(baseurlInventory+"inventory",{
        headers:this.httpHeaders
      })
    }
    getInventoryById(id:number)
    {
      return this.http.get<GetInventory>(baseurlInventory+"inventory/"+id, {
        headers:this.httpHeaders
      })
    }
    updateInventory(id:number,body:InventoryPost)
    {
      return this.http.put(baseurlInventory+"inventory/"+id,body,{
        headers:this.httpHeaders
      })
    }
    deleteInventory(id:number){
      return this.http.delete(baseurlInventory+"inventory/"+id,{
        headers:this.httpHeaders
      })
    }
  
}
