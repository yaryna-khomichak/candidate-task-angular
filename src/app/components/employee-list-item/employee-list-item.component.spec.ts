import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Employee, EmployeeStatus } from 'src/app/models';
import { MaterialModule } from 'src/app/material.module';
import { EmployeeListItemComponent } from './employee-list-item.component';
import { EmployeeActionsComponent } from '../employee-actions';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeListItemComponent', () => {
  let component: EmployeeListItemComponent;
  let fixture: ComponentFixture<EmployeeListItemComponent>;
  let employee: Employee;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        EmployeeListItemComponent,
        EmployeeActionsComponent,
        RouterTestingModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListItemComponent);
    component = fixture.componentInstance;
    employee = {
      id: '50',
      name: 'Eve Foster',
      email: 'eve.foster@example.com',
      role: 'Accountant',
      status: EmployeeStatus.ACTIVE,
      joiningDate: '2021-03-05',
    };
    component.employee = employee;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders employee details correctly', () => {
    const nameElement = fixture.debugElement.query(
      By.css('.employee-list-item__name')
    );
    const emailElement = fixture.debugElement.query(
      By.css('.employee-list-item__email')
    );
    const roleElement = fixture.debugElement.query(
      By.css('.employee-list-item__role')
    );
    const statusElement = fixture.debugElement.query(
      By.css('.employee-list-item__status')
    );

    expect(nameElement.nativeElement.textContent).toContain(employee.name);
    expect(roleElement.nativeElement.textContent).toContain(employee.role);
    expect(statusElement.nativeElement.textContent).toContain(employee.status);
    expect(emailElement.nativeElement.textContent).toContain(employee.email);
  });

  it('should use app-employee-action with passed employee', () => {
    const employeeActionsComponentDe = fixture.debugElement.query(
      By.directive(EmployeeActionsComponent)
    );
    const employeeActionsComponentInstance =
      employeeActionsComponentDe.componentInstance as EmployeeActionsComponent;

    expect(employeeActionsComponentInstance.employee).toEqual(employee);
  });
});
