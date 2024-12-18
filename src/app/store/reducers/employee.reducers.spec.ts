import * as EmployeeActions from '../actions';
import { employeeReducer, initialState } from './employee.reducers';
import { mockEmployee } from 'src/app/testing/mocks';

describe('employeeReducer', () => {
  describe('loadEmployees', () => {
    it('should set loading as true and clear error', () => {
      const action = EmployeeActions.loadEmployees();
      const state = employeeReducer(initialState, action);

      expect(state).toEqual({
        employees: [],
        loadingEmployees: true,
        updatingEmployees: false,
        error: null,
      });
    });
  });

  describe('loadEmployeesSuccess', () => {
    it('should populate employees, set loading to false, and clear error', () => {
      const newEmployees = [{ ...mockEmployee, name: 'New Name' }];
      const action = EmployeeActions.loadEmployeesSuccess({
        employees: newEmployees,
      });
      const state = employeeReducer(initialState, action);

      expect(state).toEqual({
        employees: newEmployees,
        loadingEmployees: false,
        updatingEmployees: false,
        error: null,
      });
    });
  });

  describe('loadEmployeesFail', () => {
    it('should set loading to false, and set error', () => {
      const action = EmployeeActions.loadEmployeesFail({ error: 'Error' });
      const state = employeeReducer(initialState, action);

      expect(state).toEqual({
        employees: [],
        loadingEmployees: false,
        updatingEmployees: false,
        error: 'Error',
      });
    });
  });
});
