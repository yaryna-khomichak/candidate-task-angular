import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Input,
} from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { MaterialModule } from 'src/app/material.module';
import { Employee } from 'src/app/models';
import { EmployeeProfileComponent } from '../employee-profile';

@Component({
  selector: 'app-employee-actions',
  templateUrl: './employee-actions.component.html',
  styleUrls: ['./employee-actions.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeActionsComponent {
  @HostBinding('class.employee-actions') hostClass = true;

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
