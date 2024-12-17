import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Employee } from 'src/app/models';
import { EmployeeState, selectFilteredEmployees } from 'src/app/store';
import { EmployeeListItemComponent } from '../employee-list-item';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
  standalone: true,
  imports: [CommonModule, EmployeeListItemComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  employees$: Observable<Employee[] | undefined>;

  constructor(private store: Store<{ employee: EmployeeState }>) {
    this.employees$ = this.store.select(selectFilteredEmployees);
  }
}
