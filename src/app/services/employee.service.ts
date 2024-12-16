import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee, EmployeeStatus } from '../models';

const mockEmployeeList: Employee[] = [
  {
    id: '10',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: 'Manager',
    status: EmployeeStatus.SUSPENDED,
    joiningDate: '2020-01-10',
  },
  {
    id: '20',
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    role: 'Developer',
    status: EmployeeStatus.ACTIVE,
    joiningDate: '2021-02-15',
  },
  {
    id: '30',
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    role: 'Designer',
    status: EmployeeStatus.INACTIVE,
    joiningDate: '2020-08-23',
  },
  {
    id: '40',
    name: 'David Evans',
    email: 'david.evans@example.com',
    role: 'Developer',
    status: EmployeeStatus.ACTIVE,
    joiningDate: '2019-04-12',
  },
  {
    id: '50',
    name: 'Eve Foster',
    email: 'eve.foster@example.com',
    role: 'Accountant',
    status: EmployeeStatus.ACTIVE,
    joiningDate: '2021-03-05',
  },
  {
    id: '1',
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    role: 'Manager',
    status: EmployeeStatus.SUSPENDED,
    joiningDate: '2020-01-10',
  },
  {
    id: '2',
    name: 'Bob Brown',
    email: 'bob.brown@example.com',
    role: 'Developer',
    status: EmployeeStatus.ACTIVE,
    joiningDate: '2021-02-15',
  },
  {
    id: '3',
    name: 'Charlie Davis',
    email: 'charlie.davis@example.com',
    role: 'Designer',
    status: EmployeeStatus.INACTIVE,
    joiningDate: '2020-08-23',
  },
  {
    id: '4',
    name: 'David Evans',
    email: 'david.evans@example.com',
    role: 'Developer',
    status: EmployeeStatus.ACTIVE,
    joiningDate: '2019-04-12',
  },
  {
    id: '5',
    name: 'Eve Foster',
    email: 'eve.foster@example.com',
    role: 'Accountant',
    status: EmployeeStatus.ACTIVE,
    joiningDate: '2021-03-05',
  },
];

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

  updateEmployee(employee: Employee): Observable<Employee[]> {
    const employeeList: Employee[] = JSON.parse(
      sessionStorage.getItem('employeeList') || '[]'
    );
    const updateEmployeeList = employeeList.map((e) =>
      e.id === employee.id ? employee : e
    );
    sessionStorage.setItem('employeeList', JSON.stringify(updateEmployeeList));

    return of(updateEmployeeList);
  }
}
