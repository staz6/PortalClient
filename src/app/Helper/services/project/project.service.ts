import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseurlProject, baseurlProjectPhase } from '../../models/base';
import { GetProject } from '../../models/project/getProject';
import { GetProjectPhase } from '../../models/project/getprojectPhase';
import { PostProject } from '../../models/project/postProject';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  httpHeaders:any
  constructor(public http:HttpClient ) {
      let test = localStorage.getItem('token');
     this.httpHeaders= new HttpHeaders({
      'Authorization':`Bearer ${test}`
    })
    }
  
  getProject()
  {
    return this.http.get<GetProject[]>(baseurlProject+"project", {
      headers:this.httpHeaders
    })
  }
  postProject(body:PostProject)
  {
    return this.http.post(baseurlProject+"project", body, {
      headers:this.httpHeaders
    })
  }
  getProjectPhase()
  {
    return this.http.get<GetProjectPhase[]>(baseurlProjectPhase+"projectPhase", {
      headers:this.httpHeaders
    })
  }
  

}
