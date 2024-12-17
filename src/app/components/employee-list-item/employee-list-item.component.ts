import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { Employee } from 'src/app/models';
import { EmployeeActionsComponent } from '../employee-actions';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModule, EmployeeActionsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListItemComponent {
  @Input() employee!: Employee;
}
