import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventmanagementService } from '../eventmanagement.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css',
})
export class EmployeeDetailsComponent {
  employee: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventManagementService: EventmanagementService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const employeeId = params['id'];
      this.fetchEmployeeDetails(employeeId);
    });
  }

  fetchEmployeeDetails(employeeId: number) {
    this.eventManagementService.getEmployeeById(employeeId).subscribe(
      (employee) => {
        this.employee = employee;
      },
      (error) => {
        console.log('Error fetching employee details:', error);
      }
    );
  }

  goHomePage() {
    this.router.navigate(['/employees']);
  }

  updateEmployee(employeeId: number) {
    this.router.navigate(['/update', employeeId]);
  }

  deleteEmployee(employeeId: number) {
    this.eventManagementService.deleteEmployee(employeeId).subscribe(
      () => {
        console.log('Employee deleted successfully');

        alert('Employee deleted successfully');

        this.router.navigate(['/employees']);
      },
      (error) => {
        console.error('Error deleting employee:', error);
      }
    );
  }
}
