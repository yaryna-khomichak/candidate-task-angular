import { Observable } from 'rxjs';
import { EmployeeEffects } from './employee.effects';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { EmployeeService } from 'src/app/services';
import * as EmployeeActions from '../actions';
import { hot, cold } from 'jasmine-marbles';
import { Action } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { mockEmployee, mockEmployees } from 'src/app/testing/mocks';

interface MockEmployeeService {
  getEmployees: jasmine.Spy;
  updateEmployee: jasmine.Spy;
}

describe('EmployeeEffects', () => {
  let actions$: Observable<Action>;
  let effects: EmployeeEffects;
  let employeeService: MockEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EmployeeEffects,
        provideMockActions(() => actions$),
        RouterTestingModule,
        {
          provide: EmployeeService,
          useValue: jasmine.createSpyObj('EmployeeService', [
            'getEmployees',
            'updateEmployee',
          ]),
        },
      ],
    });

    effects = TestBed.inject(EmployeeEffects);
    employeeService = TestBed.inject(EmployeeService) as MockEmployeeService;
  });

  describe('loadEmployees$', () => {
    it('should return a loadEmployeeSuccess, with the employees, on success', () => {
      const employees = mockEmployees;
      const action = EmployeeActions.loadEmployees();
      const completion = EmployeeActions.loadEmployeesSuccess({ employees });

      actions$ = hot('-a', { a: action });

      const response = cold('-b|', { b: employees });

      employeeService.getEmployees.and.returnValue(response);

      const expected = cold('--c', { c: completion });

      expect(effects.loadEmployees$).toBeObservable(expected);
    });

    it('should return a loadEmployeeFail, with the error, on fail', () => {
      const error = 'Error';
      const action = EmployeeActions.loadEmployees();
      const completion = EmployeeActions.loadEmployeesFail({ error });

      actions$ = hot('-a', { a: action });

      const response = cold('-#|', {}, error);

      employeeService.getEmployees.and.returnValue(response);

      const expected = cold('--c', { c: completion });

      expect(effects.loadEmployees$).toBeObservable(expected);
    });
  });

  describe('updateEmployee$', () => {
    it('should return a updateEmployeeSuccess, with the employees, on success', () => {
      const employee = mockEmployee;
      const action = EmployeeActions.updateEmployee({ employee });
      const completion = EmployeeActions.updateEmployeeSuccess({
        employees: [employee],
      });

      actions$ = hot('-a', { a: action });

      const response = cold('-b|', { b: [employee] });

      employeeService.updateEmployee.and.returnValue(response);

      const expected = cold('--c', { c: completion });

      expect(effects.updateEmployee$).toBeObservable(expected);
    });

    it('should return a updateEmployeeFail, with the error, on fail', () => {
      const error = 'Error';
      const employee = {
        ...mockEmployee,
        name: 'New Name',
      };
      const action = EmployeeActions.updateEmployee({ employee });
      const completion = EmployeeActions.updateEmployeeFail({ error });

      actions$ = hot('-a', { a: action });

      const response = cold('-#|', {}, error);

      employeeService.updateEmployee.and.returnValue(response);

      const expected = cold('--c', { c: completion });

      expect(effects.updateEmployee$).toBeObservable(expected);
    });
  });
});
