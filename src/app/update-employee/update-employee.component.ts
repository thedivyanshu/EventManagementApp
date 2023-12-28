import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventmanagementService } from '../eventmanagement.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css',
})
export class UpdateEmployeeComponent {
  employeeId!: number;
  employee: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private eventManagementService: EventmanagementService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.employeeId = +params['id'];
      this.fetchEmployeeDetails();
    });
  }

  fetchEmployeeDetails() {
    this.eventManagementService.getEmployeeById(this.employeeId).subscribe(
      (employee) => {
        this.employee = employee;
      },
      (error) => {
        console.log('Error fetching employee details:', error);
      }
    );
  }

  updateEmployee() {
    if (!this.employee) {
      console.error('Employee data is not available.');
      return;
    }

    const updatedEmployee = {
      first_name: this.employee.first_name,
      last_name: this.employee.last_name,
      email: this.employee.email,
    };

    this.eventManagementService
      .updateEmployee(this.employeeId, this.employee)
      .subscribe(
        () => {
          console.log('Employee updated successfully');
          alert('Employee updated successfully');
          this.router.navigate(['/employees']);
        },
        (error) => {
          console.error('Error updating employee:', error);
        }
      );
  }
}
