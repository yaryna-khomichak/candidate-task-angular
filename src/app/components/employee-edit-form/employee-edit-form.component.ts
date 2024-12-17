import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnInit,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable, switchMap, tap } from 'rxjs';

import { MaterialModule } from 'src/app/material.module';
import { Employee, EmployeeStatus } from 'src/app/models';
import {
  EmployeeState,
  loadEmployees,
  selectEmployeeById,
  updateEmployee,
} from 'src/app/store';

@Component({
  selector: 'app-employee-edit-form',
  templateUrl: './employee-edit-form.component.html',
  styleUrls: ['./employee-edit-form.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeEditFormComponent implements OnInit {
  @HostBinding('class.employee-edit-form') hostClass = true;

  employee$!: Observable<Employee | undefined>;
  employeeForm: FormGroup;
  employeeStatus: EmployeeStatus[] = [
    EmployeeStatus.ACTIVE,
    EmployeeStatus.INACTIVE,
    EmployeeStatus.SUSPENDED,
  ];

  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store<{ employee: EmployeeState }>,
    private formBuilder: FormBuilder
  ) {
    this.store.dispatch(loadEmployees());
    this.employeeForm = this.formBuilder.group({
      id: [''],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      status: ['', [Validators.required]],
      joiningDate: ['', [Validators.required]],
      role: ['', [Validators.required]],
      photo: [''],
    });
  }

  ngOnInit(): void {
    this.employee$ = this.activatedRoute.params.pipe(
      map((params) => params['id']),
      switchMap((id: string) => this.store.select(selectEmployeeById(id))),
      tap((employee) => {
        if (employee) {
          this.employeeForm.patchValue(employee);
        }
      })
    );
  }

  updateEmployee(): void {
    const employee = this.employeeForm.value;
    this.store.dispatch(updateEmployee({ employee }));
  }
}
