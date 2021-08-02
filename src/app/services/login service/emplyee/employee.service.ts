import { Injectable } from '@angular/core';
import { Employee } from 'src/app/models/employee';
import { EmployeesService } from '../../employee/employees.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  admin:Employee
  constructor(
    public service:EmployeeService
  ) { }
}
