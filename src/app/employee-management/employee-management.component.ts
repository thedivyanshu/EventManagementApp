import { Component, OnInit } from '@angular/core';
import { EventmanagementService } from '../eventmanagement.service';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrl: './employee-management.component.css',
})
export class EmployeeManagementComponent implements OnInit {
  Employee: any[] = [];
  first_name = '';
  last_name = '';
  email = '';
  constructor(private eventManagementService: EventmanagementService) {}
  ngOnInit(): void {
    this.getEmployees();
  }
  getEmployees(): void {
    this.eventManagementService.getEmployee().subscribe((data) => {
      this.Employee = data;
    });
  }
}
