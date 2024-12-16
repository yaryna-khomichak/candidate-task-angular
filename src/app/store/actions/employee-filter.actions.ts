import { createAction, props } from '@ngrx/store';
import { FilterType } from 'src/app/models';

export const setFilterType = createAction(
  '[Employee Filter] Set Filter Type',
  props<{ filterType: FilterType }>()
);
export const setFilterValue = createAction(
  '[Employee Filter] Set Filter Value',
  props<{ filterValue: string }>()
);
