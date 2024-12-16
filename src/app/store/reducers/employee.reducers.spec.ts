import { EmployeeStatus } from 'src/app/models';
import * as EmployeeActions from '../actions';
import { employeeReducer, initialState } from './employee.reducers';

describe('employeeReducer', () => {
  describe('loadEmployees', () => {
    it('should set loading tot true and clear error', () => {
      const action = EmployeeActions.loadEmployees();
      const state = employeeReducer(initialState, action);

      expect(state).toEqual({
        employees: [],
        loading: true,
        error: null,
      });
    });
  });

  describe('loadEmployeesSuccess', () => {
    it('should populate employees, set loading to false, and clear error', () => {
      const newEmployees = [
        {
          id: '5',
          name: 'New Name',
          email: 'eve.foster@example.com',
          role: 'Accountant',
          status: EmployeeStatus.ACTIVE,
          joiningDate: '2021-03-05',
        },
      ];
      const action = EmployeeActions.loadEmployeesSuccess({
        employees: newEmployees,
      });
      const state = employeeReducer(initialState, action);

      expect(state).toEqual({
        employees: newEmployees,
        loading: false,
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
        loading: false,
        error: 'Error',
      });
    });
  });
});
