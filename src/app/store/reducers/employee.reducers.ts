import { createReducer, on } from '@ngrx/store';
import { Employee } from 'src/app/models';
import * as EmployeeActions from '../actions';

export interface EmployeeState {
  employees: Employee[];
  loadingEmployees: boolean;
  updatingEmployees: boolean;
  error: string | null;
}

export const initialState: EmployeeState = {
  employees: [],
  loadingEmployees: false,
  updatingEmployees: false,
  error: null,
};

export const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.loadEmployees, (state) => ({
    ...state,
    loadingEmployees: true,
    error: null,
  })),
  on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees,
    loadingEmployees: false,
    error: null,
  })),
  on(EmployeeActions.loadEmployeesFail, (state, { error }) => ({
    ...state,
    employees: [],
    loadingEmployees: false,
    error,
  })),
  on(EmployeeActions.updateEmployee, (state) => ({
    ...state,
    updatingEmployees: true,
    error: null,
  })),
  on(EmployeeActions.updateEmployeeSuccess, (state, { employees }) => ({
    ...state,
    employees,
    updatingEmployees: false,
    error: null,
  })),
  on(EmployeeActions.updateEmployeeFail, (state, { error }) => ({
    ...state,
    updatingEmployees: false,
    error,
  }))
);
