import { Component } from '@angular/core';
import { EventmanagementService } from '../eventmanagement.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css',
})
export class AddEmployeeComponent {
  Employee: any[] = [];
  first_name = '';
  last_name = '';
  email = '';
  message = '';
  constructor(
    private eventManagementService: EventmanagementService,
    private router: Router
  ) {}
  addEmployee(first_name: string, last_name: string, email: string) {
    first_name = first_name.trim();
    last_name = last_name.trim();
    const employee = { first_name, last_name, email };
    this.eventManagementService
      .addEmployee(employee)
      .subscribe((newEmployee) => {
        this.Employee.push(newEmployee);
      });
    alert(
      'Employee ' +
        this.first_name +
        ' ' +
        this.last_name +
        ' added Successfully'
    );
    this.router.navigate(['/employees']);
  }
}
