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
import { EditemployeeinfomodalComponent } from './editemployeeinfomodal/editemployeeinfomodal.component'
import { GetLeaveComponent } from './Attendance/get-leave/get-leave.component';
// import { SideNavComponent } from './AdminPortal/side-nav/side-nav.component';
import { AdminNavComponent } from './AdminPortal/admin-nav/admin-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip'
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './AdminPortal/dashboard/dashboard.component';
import {MatCardModule} from '@angular/material/card';
// import {MatTableModule} from '@angular/material/table';
import { InventoryRequestsComponent } from './inventory/inventory-requests/inventory-requests.component';
import { EmployeeInfoComponent } from './AdminPortal/employee-info/employee-info.component';
// import { PopUpsComponent } from './AdminPortal/pop-ups/pop-ups.component';
import { LeavePopupComponent } from './AdminPortal/employee-info/leave-popup/leave-popup.component';
import { AttendancePopupComponent } from './AdminPortal/employee-info/attendance-popup/attendance-popup.component';
import { InventoryComponent } from './AdminPortal/inventory/inventory.component';
import { InventoryUpdatePopupComponent } from './AdminPortal/inventory/inventory-update-popup/inventory-update-popup.component';
import { InventoryCreatePopupComponent } from './AdminPortal/inventory/inventory-create-popup/inventory-create-popup.component';
import { InventoryPopupComponent } from './AdminPortal/employee-info/inventory-popup/inventory-popup.component';





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
    AttendancePopupComponent,
    InventoryRequestsComponent,
    EmployeeInfoComponent,
    LeavePopupComponent,
    InventoryComponent,
    InventoryUpdatePopupComponent,
    InventoryCreatePopupComponent,
    InventoryPopupComponent


  ],
  imports: [
    MatCardModule,
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
    MatTooltipModule,
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
