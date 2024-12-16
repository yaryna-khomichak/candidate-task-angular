import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { debounceTime, Subject, takeUntil } from 'rxjs';
import { MaterialModule } from 'src/app/material.module';
import { FilterType } from 'src/app/models';
import { EmployeeState, setFilterType, setFilterValue } from 'src/app/store';

@Component({
  selector: 'app-employee-filter',
  templateUrl: './employee-filter.component.html',
  styleUrls: ['./employee-filter.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule, ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeFilterComponent implements OnInit, OnDestroy {
  @HostBinding('class.employee-filter') hostClass = true;

  filterByForm: FormGroup;
  filterTypes = [FilterType.EMAIL, FilterType.NAME, FilterType.STATUS];

  private destoroy$ = new Subject<void>();

  constructor(
    private store: Store<{ employee: EmployeeState }>,
    private formBuilder: FormBuilder
  ) {
    this.filterByForm = this.formBuilder.group({
      filterType: [null],
      filterValue: [
        {
          value: '',
          disabled: true,
        },
      ],
    });
  }

  ngOnInit(): void {
    this.filterByForm
      .get('filterType')!
      .valueChanges.pipe(takeUntil(this.destoroy$))
      .subscribe((filterType: FilterType) => {
        this.store.dispatch(setFilterType({ filterType }));
        const filterValueControl = this.filterByForm.get('filterValue');
        filterValueControl?.reset();

        if (filterType) {
          filterValueControl?.enable();
        } else {
          filterValueControl?.disable();
        }
      });
    this.filterByForm
      .get('filterValue')!
      .valueChanges.pipe(debounceTime(300), takeUntil(this.destoroy$))
      .subscribe((filterValue: string) => {
        this.store.dispatch(setFilterValue({ filterValue }));
      });
  }

  ngOnDestroy(): void {
    this.destoroy$.next();
    this.destoroy$.complete();
  }
}
