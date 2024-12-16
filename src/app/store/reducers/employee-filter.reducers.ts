import { createReducer, on } from '@ngrx/store';
import { FilterType } from 'src/app/models';
import * as EmployeeActions from '../actions';

export interface FilterState {
  filterType: FilterType | null;
  filterValue: string;
}

export const initialFilterState: FilterState = {
  filterType: null,
  filterValue: '',
};

export const employeeFilterReducer = createReducer(
  initialFilterState,
  on(EmployeeActions.setFilterType, (state, { filterType }) => ({
    ...state,
    filterType,
  })),
  on(EmployeeActions.setFilterValue, (state, { filterValue }) => ({
    ...state,
    filterValue,
  }))
);
