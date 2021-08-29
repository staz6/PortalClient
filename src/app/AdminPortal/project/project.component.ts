import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { GetProject } from 'src/app/Helper/models/project/getProject';
import { ProjectService } from 'src/app/Helper/services/project/project.service';

import { ProjectCreatePopupComponent } from './project-create-popup/project-create-popup.component';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  
  constructor(private service:ProjectService,public dialog:MatDialog) { }
  body:GetProject[]=[]
  ngOnInit(): void {
    this.getProject();
  }

  getProject()
  {
    this.service.getProject().subscribe(response => {
      this.body=response;
      console.log(response);
    }, Error => {
      console.log(Error)
    });
  }
  projectCreateDialog(){
    const dialogRef = this.dialog.open(ProjectCreatePopupComponent,{
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getProject();
    });
  }
}
