import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmployeeListComponent } from 'src/app/components';
import { EmployeeFilterComponent } from 'src/app/components/employee-filter';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [CommonModule, EmployeeListComponent, EmployeeFilterComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
