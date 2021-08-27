import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSalaryComponent } from './EmployeePortal/Attendance/employee-attendance/employee-salary.component';
import { HomeComponent } from './EmployeePortal/home/home.component';
import { InventoryTicketComponent } from './EmployeePortal/inventory/inventory-ticket/inventory-ticket.component';
import { LeaveComponent } from './EmployeePortal/Attendance/leave/leave.component';
import { LoginComponent } from './Core/login/login.component';
import { SalaryHistoryComponent } from './EmployeePortal/Salary/salary-history/salary-history.component';
import { SubmitDocumentComponent } from './EmployeePortal/Document/documents-submit/submit-document/submit-document.component';
import { LeaveReportComponent } from './EmployeePortal/Attendance/leave-report/leave-report.component';
import { GetLeaveComponent } from './EmployeePortal/Attendance/get-leave/get-leave.component';
import { DashboardComponent } from './AdminPortal/dashboard/dashboard.component';
import { SalarySlipComponent } from './EmployeePortal/Salary/salary-slip/salary-slip.component';
import { AdminNavComponent } from './AdminPortal/admin-nav/admin-nav.component';
import { EmployeeInfoComponent } from './AdminPortal/employee-info/employee-info.component';
import { LeavePopupComponent } from './AdminPortal/employee-info/leave-popup/leave-popup.component';
import { InventoryComponent } from './AdminPortal/inventory/inventory.component';
import { InventoryRequestsComponent } from './EmployeePortal/inventory/inventory-requests/inventory-requests.component';
import { ProjectComponent } from './AdminPortal/project.component';

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
  {path:"inventoryrequests",component:InventoryRequestsComponent},
  {path: "admin-nav", component:AdminNavComponent,
  children:[
  {path: "", component:DashboardComponent},
  {path:"dashboard",component:DashboardComponent},
  {path:"emplyee-info", component:EmployeeInfoComponent},
  {path:"leave", component:LeavePopupComponent},
  {path:"admin-inventory", component:InventoryComponent},
  {path:"project",component:ProjectComponent}
  ]
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
