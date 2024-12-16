import { createAction, props } from '@ngrx/store';
import { Employee } from 'src/app/models';

export const loadEmployees = createAction('[Employee] Load Employees');
export const loadEmployeesSuccess = createAction(
  '[Employee] Load Employees Success',
  props<{ employees: Employee[] }>()
);
export const loadEmployeesFail = createAction(
  '[Employee] Load Employees Fail',
  props<{ error: string }>()
);

export const updateEmployee = createAction(
  '[Employee] Update Employee',
  props<{ employee: Employee }>()
);
export const updateEmployeeSuccess = createAction(
  '[Employee] Update Employee Success',
  props<{ employees: Employee[] }>()
);
export const updateEmployeeFail = createAction(
  '[Employee] Update Employee Fail',
  props<{ error: string }>()
);
