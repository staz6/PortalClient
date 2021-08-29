import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/Helper/services/project/project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  constructor(private service:ProjectService) { }

  ngOnInit() {
    // const routeParams = this.route.snapshot.paramMap;
    // const userId = routeParams.get('userId');
  }

  getProjectPhase()
  {

  }

}
