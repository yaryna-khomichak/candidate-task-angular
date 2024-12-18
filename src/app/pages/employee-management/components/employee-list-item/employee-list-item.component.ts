import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Employee } from 'src/app/models';

@Component({
  selector: 'app-employee-list-item',
  templateUrl: './employee-list-item.component.html',
  styleUrls: ['./employee-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListItemComponent {
  @Input() employee!: Employee;
}
