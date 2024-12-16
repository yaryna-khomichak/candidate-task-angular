import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { Employee } from 'src/app/models';
import { EmployeeActionsComponent } from '../employee-actions/employee-actions.component';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule, EmployeeActionsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListItemComponent {
  @HostBinding('class.employee-list-item') hostClass = true;

  @Input() employee!: Employee;
}
