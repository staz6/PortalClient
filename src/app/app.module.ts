import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { SalaryHistoryComponent } from './salary-history/salary-history.component';
import { EmployeeSalaryComponent } from './employee-salary/employee-salary.component';
import { MatIconModule} from '@angular/material/icon';
import { SalarySlipComponent } from './salary-slip/salary-slip.component';
import { MatTableModule} from '@angular/material/table';
import { SubmitDocumentComponent } from './submit-document/submit-document.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule} from '@angular/material/input';
import { DocumentsSubmitComponent } from './documents-submit/documents-submit.component';
import { InventoryTicketComponent } from './inventory-ticket/inventory-ticket.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopSectionComponent } from './top-section/top-section.component';
import { LeaveComponent } from './leave/leave.component';
import { LeaveReportComponent } from './leave-report/leave-report.component';
import { RegistrationComponent } from './registration/registration.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { NotificationsComponent } from './notifications/notifications.component';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from "@auth0/angular-jwt";
import {MatDialogModule} from '@angular/material/dialog';
import { EditemployeeinfomodalComponent } from './editemployeeinfomodal/editemployeeinfomodal.component'



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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
