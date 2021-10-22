import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostProjectTask } from 'src/app/Helper/models/project/postProjectTask';
import { ProjectService } from 'src/app/Helper/services/project/project.service';

@Component({
  selector: 'app-task-create-popup',
  templateUrl: './task-create-popup.component.html',
  styleUrls: ['./task-create-popup.component.css']
})
export class TaskCreatePopupComponent implements OnInit {
  @Input() public projectPhaseId:any;
  Form:FormGroup 
  body:PostProjectTask
  projectAsignee: FormArray;
  projectPiority=[
 { index: 0, piority: "Trivial" },
   { index: 1, piority: "Regular" },
   { index: 2, piority: "Important" },
   { index: 3, piority: "Critical" }
]

  constructor(private service:ProjectService,public http:HttpClient,private formBuilder: FormBuilder) {
    
  }

  createForm() {
    this.Form = this.formBuilder.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      attachment: [""],
      legend:[""],
      piority:["", Validators.required],
      projectAsignee: this.formBuilder.array([ this.createItem() ]),
      reporter: [""],
      startDate:["",[Validators.required]],
      dueDate:["",[Validators.required]]
      
    });
  }
  ngOnInit() {
    this.createForm();
    
  }
  postForm(){
    this.body = this.Form.value;
    this.body.projectPhaseId=this.projectPhaseId;
    console.log(this.body)
    this.service.postProjectTak(this.body).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
  getControls() {
    return (this.Form.get('projectAsignee') as FormArray).controls;
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      asigneeId: '',
    });
  }
  
  addItem(): void {
    this.projectAsignee = this.Form.get('projectAsignee') as FormArray;
    this.projectAsignee.push(this.createItem());
  }

}
