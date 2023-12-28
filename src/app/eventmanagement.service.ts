import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventmanagementService {
  private url = 'http://localhost:3000/employees';
  constructor(private http: HttpClient) {}

  addEmployee(employee: any) {
    return this.http.post(this.url, employee);
  }

  getEmployee(): Observable<any> {
    return this.http.get(this.url);
  }
  getEmployeeById(id: number): Observable<any> {
    const apiUrl = `${this.url}/${id}`;
    return this.http.get(apiUrl);
  }
  deleteEmployee(id: number): Observable<any> {
    const deleteUrl = `${this.url}/${id}`;
    return this.http.delete(deleteUrl);
  }
  updateEmployee(id: number, updatedEmployee: any): Observable<any> {
    const updateUrl = `${this.url}/${id}`;
    return this.http.put(updateUrl, updatedEmployee);
  }
}
