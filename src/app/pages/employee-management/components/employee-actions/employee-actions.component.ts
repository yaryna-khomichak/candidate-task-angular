import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/models';
import { EmployeeProfileComponent } from 'src/app/shared/components';

@Component({
  selector: 'app-employee-actions',
  templateUrl: './employee-actions.component.html',
  styleUrls: ['./employee-actions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeActionsComponent {
  @Input() employee!: Employee;

  constructor(private dialog: MatDialog) {}

  openEmployeeProfile(): void {
    this.dialog.open(EmployeeProfileComponent, {
      data: {
        employee: this.employee,
      },
    });
  }
}
