import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { GetProjectPhase } from 'src/app/Helper/models/project/getprojectPhase';
import { GetProjectTask } from 'src/app/Helper/models/project/getProjectTask';
import { ProjectService } from 'src/app/Helper/services/project/project.service';
import { TaskCreatePopupComponent } from './task-create-popup/task-create-popup.component';
import { TaskDetailPopupComponent } from './task-detail-popup/task-detail-popup.component';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  projectPhase:GetProjectPhase[]=[];
  
  constructor(private service:ProjectService,private route: ActivatedRoute,public dialog:MatDialog) { }
  
  getProjectId()
  {
    const routeParams = this.route.snapshot.paramMap;
    const projectId = routeParams.get('id');
    return projectId;
  }
  ngOnInit() {
    this.getProjectPhase();
    
  }

  drop(event: CdkDragDrop<GetProjectTask[]>) {
    console.log(event)
    if (event.previousContainer === event.container) {
      console.log(event.previousContainer.data[event.previousIndex].id)
      console.log(event.container.data[event.currentIndex].id) 
      this.swapVertical(event.previousContainer.data[event.previousIndex].id,event.container.data[event.currentIndex].id)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);     
    } else {
      // console.log(event.previousContainer.data[event.previousIndex]);
      // console.log(event.container.data[event.currentIndex]);
      this.projectTaskSwapHorizontal(event.previousContainer.data[event.previousIndex].id,event.container.data[event.currentIndex].id)
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
      
    }
  }

  getProjectPhase()
  {
    var id = this.getProjectId();
    if(id !==null){
      this.service.getProjectPhase(id).subscribe(response => {
        this.projectPhase=response;
        console.log("response "+response)
      })
    }
    else{
    }

  }
  defaultProjectPhase(){
    var id = this.getProjectId();
    if(id !== null){
      this.service.defaultProjectPhase(id).subscribe(response => {
        console.log(response);
        this.getProjectPhase();
      });
    }
  }
  taskCreateDialog(projectPhaseId:number)
  {
    const dialogRef = this.dialog.open(TaskCreatePopupComponent,{
      width: '60%'
    });
    dialogRef.componentInstance.projectPhaseId=projectPhaseId;
    dialogRef.afterClosed().subscribe(result => {
      this.getProjectPhase();
    });
    
  }

  taskDetailDialog(id:number)
  {
    const dialogRef = this.dialog.open(TaskDetailPopupComponent,{
      panelClass: 'task-detail-dialog',
      maxWidth: '90vw',
      maxHeight: '90vh',
      height: '100%',
      width: '100%'
    });
    dialogRef.componentInstance.projectTaskId=id;
    dialogRef.afterClosed().subscribe(result => {
      this.getProjectPhase();
    });
  }

  async swapVertical(pid:number,cid:number){
    this.service.projectTaskSwapVertical(pid,cid).subscribe(response => {
      console.log(response);
    }, Error => {
      console.log(Error);
    })
  }
  async projectTaskSwapHorizontal(pid:number,cid:number)
  {
    this.service.projectTaskSwapHorizontal(pid,cid).subscribe(response => {
      console.log(response);
    }, Error => {
      console.log(Error);
    })
  }

}
