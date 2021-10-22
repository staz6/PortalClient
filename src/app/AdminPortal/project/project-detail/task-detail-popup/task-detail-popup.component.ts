import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-task-detail-popup',
  templateUrl: './task-detail-popup.component.html',
  encapsulation: ViewEncapsulation.None, 
  styleUrls: ['./task-detail-popup.component.css']
})
export class TaskDetailPopupComponent implements OnInit {
  @Input() public projectTaskId:number;
  constructor() { }

  ngOnInit() {
  }

}
