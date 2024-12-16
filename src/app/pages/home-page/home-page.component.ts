import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { EmployeeListComponent } from 'src/app/components';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  standalone: true,
  imports: [CommonModule, EmployeeListComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
