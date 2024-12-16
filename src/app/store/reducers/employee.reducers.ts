import { createReducer, on } from '@ngrx/store';
import { Employee } from 'src/app/models';
import * as EmployeeActions from '../actions';

export interface EmployeeState {
  employees: Employee[];
  loading: boolean;
  error: string | null;
}

export const initialState: EmployeeState = {
  employees: [],
  loading: false,
  error: null,
};

export const employeeReducer = createReducer(
  initialState,
  on(EmployeeActions.loadEmployees, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(EmployeeActions.loadEmployeesSuccess, (state, { employees }) => ({
    ...state,
    employees,
    loading: false,
    error: null,
  })),
  on(EmployeeActions.loadEmployeesFail, (state, { error }) => ({
    ...state,
    employees: [],
    loading: false,
    error,
  })),
  on(EmployeeActions.updateEmployee, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(EmployeeActions.updateEmployeeSuccess, (state, { employees }) => ({
    ...state,
    employees,
    loading: false,
    error: null,
  })),
  on(EmployeeActions.loadEmployeesFail, (state, { error }) => ({
    ...state,
    employees: [],
    loading: false,
    error,
  }))
);
