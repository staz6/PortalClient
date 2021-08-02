import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { HomeComponent } from './home/home.component';
import { InventoryTicketComponent } from './inventory-ticket/inventory-ticket.component';
import { LoginComponent } from './login/login.component';
import { SalaryHistoryComponent } from './salary-history/salary-history.component';
import { SubmitDocumentComponent } from './submit-document/submit-document.component';

const routes: Routes = [

  {path:'home', component :HomeComponent},
  {path:'attendance', component:EmployeeSalaryComponent},
  {path: 'salary', component:SalaryHistoryComponent},
  {path : 'inventory', component:InventoryTicketComponent},
  {path: 'documents',component:SubmitDocumentComponent},
  {path: 'login', component:LoginComponent},
  {path : 'attendance/:userId', component:EmployeeSalaryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
