import { Component, OnInit } from '@angular/core';
import { EmployeeState, loadEmployees } from './store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Userlane Angular Task';

  constructor(private store: Store<{ employee: EmployeeState }>) {}

  ngOnInit(): void {
    this.store.dispatch(loadEmployees());
  }
}
