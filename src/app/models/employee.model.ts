export interface Employee {
  id: string;
  name: string;
  email: string;
  role: string;
  status: EmployeeStatus;
  joiningDate: string;
  photo?: string;
}

export enum EmployeeStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  SUSPENDED = 'Suspended',
}
