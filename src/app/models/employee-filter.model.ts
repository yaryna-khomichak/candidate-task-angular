export interface EmployeeFilter {
  filterType: FilterType;
  searchText: string;
}

export enum FilterType {
  NAME = 'name',
  EMAIL = 'email',
  STATUS = 'status',
}
