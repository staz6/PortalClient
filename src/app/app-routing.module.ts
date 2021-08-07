import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSalaryComponent } from './Attendance/employee-attendance/employee-salary.component';
import { HomeComponent } from './home/home.component';
import { InventoryTicketComponent } from './inventory/inventory-ticket/inventory-ticket.component';
import { LeaveComponent } from './Attendance/leave/leave.component';
import { LoginComponent } from './login/login.component';
import { SalaryHistoryComponent } from './Salary/salary-history/salary-history.component';
import { SubmitDocumentComponent } from './submit-document/submit-document.component';
import { LeaveReportComponent } from './Attendance/leave-report/leave-report.component';
import { GetLeaveComponent } from './Attendance/get-leave/get-leave.component';
import { DashboardComponent } from './AdminPortal/dashboard/dashboard.component';
import { SalarySlipComponent } from './Salary/salary-slip/salary-slip.component';
import { AdminNavComponent } from './AdminPortal/admin-nav/admin-nav.component';
import { EmployeeInfoComponent } from './AdminPortal/employee-info/employee-info.component';
import { LeavePopupComponent } from './AdminPortal/employee-info/leave-popup/leave-popup.component';
import { InventoryComponent } from './AdminPortal/inventory/inventory.component';

const routes: Routes = [

  {path:'', component :HomeComponent},
  {path: 'salary', component:SalaryHistoryComponent},
  {path:"salaryslip/:id",component:SalarySlipComponent},
  {path : 'inventory', component:InventoryTicketComponent},
  {path: 'documents',component:SubmitDocumentComponent},
  {path: 'login', component:LoginComponent},
  {path : 'attendance', component:EmployeeSalaryComponent},
  {path : 'leaverequest' ,component:LeaveComponent},
  {path : "leavereport",component:LeaveReportComponent  },
  {path: "leave",component:GetLeaveComponent},
  {path: "inventoryticket",component:InventoryTicketComponent},
  {path: "admin-nav", component:AdminNavComponent,
  children:[
  {path: "dashboard", component:DashboardComponent},
  {path:"emplyee-info", component:EmployeeInfoComponent},
  {path:"leave", component:LeavePopupComponent},
  {path:"admin-inventory", component:InventoryComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
