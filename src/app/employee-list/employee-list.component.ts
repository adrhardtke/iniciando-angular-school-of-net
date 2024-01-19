import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee, EmployeeService } from '../services/employee.service';

@Component({
  selector: 'employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent {
  employees: Employee[] = this.employeeService.employees
  constructor(private employeeService: EmployeeService){

  }
}
