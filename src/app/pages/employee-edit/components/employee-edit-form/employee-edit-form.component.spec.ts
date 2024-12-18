import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/material.module';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { EmployeeEditFormComponent } from './employee-edit-form.component';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { updateEmployee } from 'src/app/store';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { mockEmployee, mockEmployees } from 'src/app/testing/mocks';
import { RouterTestingModule } from '@angular/router/testing';

describe('EmployeeEditFormComponent', () => {
  let component: EmployeeEditFormComponent;
  let fixture: ComponentFixture<EmployeeEditFormComponent>;
  const initialState = {
    employee: {
      employees: mockEmployees,
    },
  };
  const mockActivatedRoute = {
    params: of({ id: '50' }),
  };
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeEditFormComponent],
      imports: [
        MaterialModule,
        ReactiveFormsModule,
        NoopAnimationsModule,
        RouterTestingModule,
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
      ...mockEmployee,
      name: 'New Name',
    });

    component.updateEmployee();

    expect(store.dispatch).toHaveBeenCalledWith(
      updateEmployee({
        employee: {
          ...mockEmployee,
          name: 'New Name',
        },
      })
    );
  });
});
