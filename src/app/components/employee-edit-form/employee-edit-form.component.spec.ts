import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { EmployeeEditFormComponent } from './employee-edit-form.component';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { updateEmployee } from 'src/app/store';
import { EmployeeStatus } from 'src/app/models';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('EmployeeEditFormComponent', () => {
  let component: EmployeeEditFormComponent;
  let fixture: ComponentFixture<EmployeeEditFormComponent>;
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
          photo: 'src',
        },
      ],
    },
  };
  const mockActivatedRoute = {
    params: of({ id: '50' }),
  };
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        EmployeeEditFormComponent,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        provideMockStore({ initialState }),
        FormBuilder,
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(EmployeeEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('initializes the form with values', () => {
    const formElement = fixture.debugElement.query(
      By.css('form')
    ).nativeElement;
    expect(formElement).toBeTruthy();
    expect(component.employeeForm.get('name')?.value).toEqual('Eve Foster');
  });

  it('should dispatch an updateEmployee action on form submission', () => {
    spyOn(store, 'dispatch');
    component.employeeForm.setValue({
      id: '50',
      name: 'New Name',
      email: 'eve.foster@example.com',
      role: 'Accountant',
      status: EmployeeStatus.ACTIVE,
      joiningDate: '2021-03-05',
      photo: 'src',
    });

    component.updateEmployee();

    expect(store.dispatch).toHaveBeenCalledWith(
      updateEmployee({
        employee: {
          id: '50',
          name: 'New Name',
          email: 'eve.foster@example.com',
          role: 'Accountant',
          status: EmployeeStatus.ACTIVE,
          joiningDate: '2021-03-05',
          photo: 'src',
        },
      })
    );
  });
});
