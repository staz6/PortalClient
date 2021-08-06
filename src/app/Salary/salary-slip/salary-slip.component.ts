import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SalarySlip } from 'src/app/models/salary/salarySlip';
import { SalaryService } from 'src/app/services/salary/salary.service';

@Component({
  selector: 'app-salary-slip',
  templateUrl: './salary-slip.component.html',
  styleUrls: ['./salary-slip.component.css']
})
export class SalarySlipComponent implements OnInit {
  slip:SalarySlip;
  constructor(private service:SalaryService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const id = routeParams.get('id');
    if(id!=null)
    this.getSalarySlip(id);
  }

  getSalarySlip(id:string){
    this.service.getSalarySlip(id).subscribe(response => {
      this.slip=response;
    })
  }

}
