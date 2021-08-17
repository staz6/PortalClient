import { Component, OnInit } from '@angular/core';
import { GetSalaryHistory } from 'src/app/Helper/models/salary/getSalaryHistory';
import { SalaryService } from 'src/app/Helper/services/salary/salary.service';

@Component({
  selector: 'app-salary-history',
  templateUrl: './salary-history.component.html',
  styleUrls: ['./salary-history.component.css']
})
export class SalaryHistoryComponent implements OnInit {
  salaryHistory:GetSalaryHistory[]=[];
  constructor(private service:SalaryService) { }

  ngOnInit(): void {
    const userId=localStorage.getItem("id")
    if(userId!=null){
      this.getSalary(userId);
    }
  }

  getSalary(userId:string){
    this.service.getSalary(userId).subscribe(response => {
      console.log(response)
      this.salaryHistory=response
    })
  }
}
