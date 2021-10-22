import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseurl, baseurlProject, baseurlProjectPhase, baseurlProjectTask } from '../../models/base';
import { GetProject } from '../../models/project/getProject';
import { GetProjectPhase } from '../../models/project/getprojectPhase';
import { PostProject } from '../../models/project/postProject';
import { PostProjectTask } from '../../models/project/postProjectTask';

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
  getProjectPhase(id:string)
  {
    return this.http.get<GetProjectPhase[]>(baseurlProjectPhase+"projectPhase/"+id, {
      headers:this.httpHeaders
    })
  }
  defaultProjectPhase(id:string)
  {
    return this.http.post(baseurlProjectPhase+"defaultProjectPhase/"+id, null, {
      headers:this.httpHeaders
    })
  }
  postProjectTak(body:PostProjectTask)
  {
    return this.http.post(baseurlProjectTask+"task",body,{
      headers:this.httpHeaders
    })
  }
  projectTaskSwapVertical(pid:number, cid:number)
  {
    return this.http.put(baseurlProjectTask+"task/"+pid+"/"+cid,null,{
      headers:this.httpHeaders
    })
  }
  projectTaskSwapHorizontal(pid:number,cid:number)
  {
    return this.http.put(baseurlProjectTask+"taskHorizontal/"+pid+"/"+cid,null,{
      headers:this.httpHeaders
    })
  }
  

}
