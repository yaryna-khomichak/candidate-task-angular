import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState, FilterState } from '../reducers';

export const selectEmployeeState =
  createFeatureSelector<EmployeeState>('employee');

export const selectEmployees = createSelector(
  selectEmployeeState,
  (state: EmployeeState) => state.employees
);

export const selectEmployeeById = (id: string) =>
  createSelector(selectEmployees, (employees) =>
    employees.find((employee) => employee.id === id)
  );

export const selectFilterState = createFeatureSelector<FilterState>('filter');

export const selectFilteredEmployees = createSelector(
  selectEmployees,
  selectFilterState,
  (employees, filterSettings) => {
    const { filterType, filterValue } = filterSettings;

    if (!filterType || !filterValue) {
      return employees;
    }

    return employees.filter((employee) => {
      const value = employee[filterType]?.toLocaleLowerCase();
      return value.includes(filterValue.toLowerCase());
    });
  }
);
