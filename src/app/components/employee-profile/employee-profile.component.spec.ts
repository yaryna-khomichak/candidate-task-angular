import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeStatus } from 'src/app/models';
import { MaterialModule } from 'src/app/material.module';
import { EmployeeProfileComponent } from './employee-profile.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';

describe('EmployeeProfileComponent', () => {
  let component: EmployeeProfileComponent;
  let fixture: ComponentFixture<EmployeeProfileComponent>;
  const employee = {
    id: '50',
    name: 'Eve Foster',
    email: 'eve.foster@example.com',
    role: 'Accountant',
    status: EmployeeStatus.ACTIVE,
    joiningDate: '2021-03-05',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialModule, EmployeeProfileComponent, RouterTestingModule],
      providers: [{ provide: MAT_DIALOG_DATA, useValue: { employee } }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display employee details correctly', () => {
    const nameEL = fixture.debugElement.query(
      By.css('.employee-profile__name')
    ).nativeElement;
    const emailEL = fixture.debugElement.query(
      By.css('.employee-profile__email')
    ).nativeElement;

    expect(nameEL.textContent).toContain(employee.name);
    expect(emailEL.textContent).toContain(employee.email);
  });
});
