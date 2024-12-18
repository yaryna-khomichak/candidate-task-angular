import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models';
import { mockEmployeeList } from '../mocks';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {
    if (!sessionStorage.getItem('employeeList')) {
      sessionStorage.setItem('employeeList', JSON.stringify(mockEmployeeList));
    }
  }

  getEmployees(): Observable<Employee[]> {
    const employeeList: Employee[] = JSON.parse(
      sessionStorage.getItem('employeeList') || '[]'
    );

    return of(employeeList);
  }

  updateEmployee(
    employee: Employee,
    currentEmployees: Employee[]
  ): Observable<Employee[]> {
    const updateEmployeeList = currentEmployees.map((e) =>
      e.id === employee.id ? employee : e
    );
    sessionStorage.setItem('employeeList', JSON.stringify(updateEmployeeList));

    return of(updateEmployeeList);
  }
}
