import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventory-popup',
  templateUrl: './inventory-popup.component.html',
  styleUrls: ['./inventory-popup.component.css']
})
export class InventoryPopupComponent implements OnInit {
  displayedColumns: string[] = ['date', 'shiftTiming', 'checkIn', 'checkOut','workedHours','effectiveHours','status'];
  dataSource=[]
  constructor() { }

  ngOnInit(): void {
  }

}
