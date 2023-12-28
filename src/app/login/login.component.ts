import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username: string | undefined;
  password: string | undefined;
  errorMessage: string | undefined;

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    // Check username and password against a stored value
    if (this.username === 'admin' && this.password === 'password') {
      // Navigate to the main employee management page
      this.router.navigate(['/employees']);
    } else {
      // Set error message
      this.errorMessage = 'Invalid username or password';
    }
  }
}
