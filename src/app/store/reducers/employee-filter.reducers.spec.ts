import { FilterType } from 'src/app/models';
import * as EmployeeActions from '../actions';
import {
  employeeFilterReducer,
  initialFilterState,
} from './employee-filter.reducers';

describe('employeeFilterReducer', () => {
  describe('setFilterType', () => {
    it('should set the filter type in the state', () => {
      const filterType = FilterType.NAME;
      const action = EmployeeActions.setFilterType({ filterType });
      const state = employeeFilterReducer(initialFilterState, action);

      expect(state.filterType).toEqual(filterType);
      expect(state.filterValue).toEqual(initialFilterState.filterValue);
    });
  });

  describe('setFilterValue', () => {
    it('should set the filter value in the state', () => {
      const filterValue = 'test';
      const action = EmployeeActions.setFilterValue({ filterValue });
      const state = employeeFilterReducer(initialFilterState, action);

      expect(state.filterValue).toEqual(filterValue);
      expect(state.filterType).toEqual(initialFilterState.filterType);
    });
  });
});
