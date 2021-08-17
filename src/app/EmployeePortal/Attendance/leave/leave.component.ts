import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostLeave } from 'src/app/Helper/models/attendance/postLeave';
import { AttendaceService } from 'src/app/Helper/services/attendace/attendace.service';



@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {
  Form:FormGroup
  body:PostLeave;
  constructor(private service:AttendaceService,private formBuilder: FormBuilder,private router: Router) {
    this.createForm();
   }
   createForm() {
    this.Form = this.formBuilder.group({
      from: ["", [Validators.required]],
      till: ["", [Validators.required]],
      reason: ["", Validators.required],
      type : ["",Validators.required]
    });
  }

  ngOnInit(): void {
  }
  postLeave(){
    this.body = this.Form.value;
    this.service.postLeave(this.body).subscribe( response => {
      console.log(response)
      this.router.navigateByUrl("leave", { replaceUrl: true });
      
    }, Error => {
      console.log(Error);
    })
  }

}
