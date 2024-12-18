import { Component, Input } from '@angular/core';
import { Employee } from 'src/app/models';

@Component({
  selector: 'app-employee-actions',
  template: '<div></div>',
})
export class MockEmployeeActionsComponent {
  @Input() employee!: Employee;
}

@Component({
  selector: 'app-employee-list-item',
  template: '<div></div>',
})
export class MockEmployeeListItemComponent {
  @Input() employee!: Employee;
}
