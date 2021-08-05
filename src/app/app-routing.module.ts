import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSalaryComponent } from './Attendance/employee-attendance/employee-salary.component';
import { HomeComponent } from './home/home.component';
import { InventoryTicketComponent } from './inventory-ticket/inventory-ticket.component';
import { LeaveComponent } from './Attendance/leave/leave.component';
import { LoginComponent } from './login/login.component';
import { SalaryHistoryComponent } from './salary-history/salary-history.component';
import { SubmitDocumentComponent } from './submit-document/submit-document.component';
import { LeaveReportComponent } from './Attendance/leave-report/leave-report.component';
import { GetLeaveComponent } from './Attendance/get-leave/get-leave.component';

const routes: Routes = [

  {path:'home', component :HomeComponent},
  {path: 'salary', component:SalaryHistoryComponent},
  {path : 'inventory', component:InventoryTicketComponent},
  {path: 'documents',component:SubmitDocumentComponent},
  {path: 'login', component:LoginComponent},
  {path : 'attendance', component:EmployeeSalaryComponent},
  {path : 'leaverequest' ,component:LeaveComponent},
  {path : "leavereport",component:LeaveReportComponent  },
  {path: "leave",component:GetLeaveComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
