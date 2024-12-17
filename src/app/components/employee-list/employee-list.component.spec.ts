import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeStatus } from 'src/app/models';
import { MaterialModule } from 'src/app/material.module';
import { EmployeeListComponent } from './employee-list.component';
import { EmployeeListItemComponent } from '../employee-list-item';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { By } from '@angular/platform-browser';
import { selectFilteredEmployees } from 'src/app/store';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeListComponent', () => {
  let component: EmployeeListComponent;
  let fixture: ComponentFixture<EmployeeListComponent>;
  let store: MockStore;
  const initialState = {
    employee: {
      employees: [
        {
          id: '50',
          name: 'Eve Foster',
          email: 'eve.foster@example.com',
          role: 'Accountant',
          status: EmployeeStatus.ACTIVE,
          joiningDate: '2021-03-05',
        },
      ],
    },
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        EmployeeListComponent,
        EmployeeListItemComponent,
        RouterTestingModule,
      ],
      providers: [provideMockStore({ initialState })],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    store.overrideSelector(
      selectFilteredEmployees,
      initialState.employee.employees
    );
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a list of employee items', () => {
    fixture.detectChanges();

    const listItems = fixture.debugElement.queryAll(
      By.css('app-employee-list-item')
    );

    expect(listItems.length).toEqual(1);
  });
});
