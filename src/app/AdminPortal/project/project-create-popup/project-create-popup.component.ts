import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PostProject } from 'src/app/Helper/models/project/postProject';
import { ProjectService } from 'src/app/Helper/services/project/project.service';

@Component({
  selector: 'app-project-create-popup',
  templateUrl: './project-create-popup.component.html',
  styleUrls: ['./project-create-popup.component.css']
})
export class ProjectCreatePopupComponent implements OnInit {

  Form:FormGroup 
  body:PostProject
  projectMembers: FormArray;
  constructor(private service:ProjectService,public http:HttpClient,private formBuilder: FormBuilder) {
    
   }
 
  createForm() {
    this.Form = this.formBuilder.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      logo: [""],
      image:[""],
      projectLead:["", Validators.required],
      // projectMembers: this.formBuilder.group({
      //   asigneeId:[""],
      //   role:[""]
      // }),
      projectMembers: this.formBuilder.array([ this.createItem() ]),
      attachment: [""],
      dueDate:["",[Validators.required]],
      budget:[]
    });
  }

  
  ngOnInit() {
    this.createForm();
  }
  postForm()
  {
    this.body = this.Form.value;
    console.log(this.body)
  }

  getControls() {
    return (this.Form.get('projectMembers') as FormArray).controls;
  }
  createItem(): FormGroup {
    return this.formBuilder.group({
      asigneeId: '',
      role: '',
    });
  }
  
  addItem(): void {
    this.projectMembers = this.Form.get('projectMembers') as FormArray;
    this.projectMembers.push(this.createItem());
  }


}
