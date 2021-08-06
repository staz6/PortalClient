import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { SalaryHistoryComponent } from './Salary/salary-history/salary-history.component';
import { EmployeeSalaryComponent } from './Attendance/employee-attendance/employee-salary.component';
import { MatIconModule} from '@angular/material/icon';
import { SalarySlipComponent } from './Salary/salary-slip/salary-slip.component';
import { MatTableModule} from '@angular/material/table';
import { SubmitDocumentComponent } from './submit-document/submit-document.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { DocumentsSubmitComponent } from './documents-submit/documents-submit.component';
import { InventoryTicketComponent } from './inventory/inventory-ticket/inventory-ticket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { LeaveComponent } from './Attendance/leave/leave.component';
import { LeaveReportComponent } from './Attendance/leave-report/leave-report.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NotificationsComponent } from './notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import {MatSelectModule} from '@angular/material/select'
import {MatDialogModule} from '@angular/material/dialog';
import { EditemployeeinfomodalComponent } from './editemployeeinfomodal/editemployeeinfomodal.component';
import { GetLeaveComponent } from './Attendance/get-leave/get-leave.component';
// import { SideNavComponent } from './AdminPortal/side-nav/side-nav.component';
import { AdminNavComponent } from './AdminPortal/admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './AdminPortal/dashboard/dashboard.component';
import { InventoryRequestsComponent } from './inventory/inventory-requests/inventory-requests.component'




@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    SalaryHistoryComponent,
    EmployeeSalaryComponent,
    SalarySlipComponent,
    SubmitDocumentComponent,
    LoginComponent,
    DocumentsSubmitComponent,
    InventoryTicketComponent,
    NavbarComponent,
    TopSectionComponent,
    LeaveComponent,
    LeaveReportComponent,
    RegistrationComponent,
    NotificationsComponent,
    EditemployeeinfomodalComponent,
    GetLeaveComponent,
    AdminNavComponent,
    DashboardComponent,
    InventoryRequestsComponent,


  ],
  imports: [
    HttpClientModule,
    MatCheckboxModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    JwtModule.forRoot({
      config: {
        tokenGetter:()=>{
          return localStorage.getItem("token")
        }

      },
    }),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
