import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Employee } from 'src/app/models';
import { MaterialModule } from 'src/app/material.module';
import { EmployeeListItemComponent } from './employee-list-item.component';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import {
  mockEmployee,
  MockEmployeeActionsComponent,
} from 'src/app/testing/mocks';

describe('EmployeeListItemComponent', () => {
  let component: EmployeeListItemComponent;
  let fixture: ComponentFixture<EmployeeListItemComponent>;
  let employee: Employee;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeListItemComponent, MockEmployeeActionsComponent],
      imports: [MaterialModule, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeListItemComponent);
    component = fixture.componentInstance;
    employee = mockEmployee;
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
      By.directive(MockEmployeeActionsComponent)
    );
    const employeeActionsComponentInstance =
      employeeActionsComponentDe.componentInstance as MockEmployeeActionsComponent;

    expect(employeeActionsComponentInstance.employee).toEqual(employee);
  });
});
