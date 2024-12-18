import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';
import { Employee } from 'src/app/models';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-employee-profile',
  templateUrl: './employee-profile.component.html',
  styleUrls: ['./employee-profile.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule, MaterialModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeProfileComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { employee: Employee }) {}
}
