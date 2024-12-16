import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeActionsComponent } from './employee-actions.component';
import { Employee, EmployeeStatus } from 'src/app/models';
import { MaterialModule } from 'src/app/material.module';
import { By } from '@angular/platform-browser';

describe('EmployeeActionsComponent', () => {
  let component: EmployeeActionsComponent;
  let fixture: ComponentFixture<EmployeeActionsComponent>;
  let employee: Employee;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, EmployeeActionsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeActionsComponent);
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

  it('should have an employee input', () => {
    expect(component.employee).toEqual(employee);
  });

  describe('openEmployeeProfile', () => {
    it('should call openEmployeeProfile when visibility icon is clicked', () => {
      spyOn(component, 'openEmployeeProfile');
      const button = fixture.debugElement.query(
        By.css('.employee-actions__open-profile-button')
      );
      button.triggerEventHandler('click', null);
      expect(component.openEmployeeProfile).toHaveBeenCalled();
    });
  });
});
