import { Employee, EmployeeStatus } from 'src/app/models';

export const mockEmployee: Employee = {
  id: '50',
  name: 'Eve Foster',
  email: 'eve.foster@example.com',
  role: 'Accountant',
  status: EmployeeStatus.ACTIVE,
  joiningDate: '2021-03-05',
  photo: 'src',
};

export const mockEmployees: Employee[] = [mockEmployee];
