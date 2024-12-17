import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { EmployeeService } from 'src/app/services';
import * as EmployeeActions from '../actions';
import { Router } from '@angular/router';

@Injectable()
export class EmployeeEffects {
  loadEmployees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.loadEmployees),
      mergeMap(() =>
        this.employeeService.getEmployees().pipe(
          map((employees) =>
            EmployeeActions.loadEmployeesSuccess({ employees })
          ),
          catchError((error) =>
            of(EmployeeActions.loadEmployeesFail({ error }))
          )
        )
      )
    )
  );

  updateEmployee$ = createEffect(() =>
    this.actions$.pipe(
      ofType(EmployeeActions.updateEmployee),
      mergeMap((action) =>
        this.employeeService.updateEmployee(action.employee).pipe(
          map((employees) =>
            EmployeeActions.updateEmployeeSuccess({ employees })
          ),
          tap(() => this.router.navigate(['/'])),
          catchError((error) =>
            of(EmployeeActions.updateEmployeeFail({ error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private employeeService: EmployeeService,
    private router: Router
  ) {}
}
