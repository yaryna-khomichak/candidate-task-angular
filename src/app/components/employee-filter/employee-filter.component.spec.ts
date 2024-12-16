import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { EmployeeStatus, FilterType } from 'src/app/models';
import { MaterialModule } from 'src/app/material.module';
import { EmployeeFilterComponent } from './employee-filter.component';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { setFilterType, setFilterValue } from 'src/app/store';

describe('EmployeeFilterComponent', () => {
  let component: EmployeeFilterComponent;
  let fixture: ComponentFixture<EmployeeFilterComponent>;
  let store: MockStore;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        EmployeeFilterComponent,
        ReactiveFormsModule,
        NoopAnimationsModule,
      ],
      providers: [
        FormBuilder,
        provideMockStore({ initialState: { employee: {} as EmployeeStatus } }),
      ],
    }).compileComponents();

    store = TestBed.inject(MockStore);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch setFilterType when filter type changes', () => {
    spyOn(store, 'dispatch');
    const filterTypeControl = component.filterByForm.get('filterType');

    filterTypeControl?.setValue(FilterType.EMAIL);

    expect(store.dispatch).toHaveBeenCalledWith(
      setFilterType({ filterType: FilterType.EMAIL })
    );
  });

  it('should dispatch filterValue when filterType is null', () => {
    const filterTypeControl = component.filterByForm.get('filterType');
    const filterValueControl = component.filterByForm.get('filterValue');

    filterTypeControl?.setValue(null);
    fixture.detectChanges();

    expect(filterValueControl?.disabled).toBeTrue();
  });

  it('should enable filterValue and dispatch setFilterValue when filter value changes and type is selected', fakeAsync(() => {
    spyOn(store, 'dispatch');
    const filterTypeControl = component.filterByForm.get('filterType');
    const filterValueControl = component.filterByForm.get('filterValue');

    filterTypeControl?.setValue(FilterType.EMAIL);
    fixture.detectChanges();

    tick();

    expect(filterValueControl?.disabled).toBeFalse();

    filterValueControl?.setValue('@gmail.com');

    tick(300);

    expect(store.dispatch).toHaveBeenCalledWith(
      setFilterValue({ filterValue: '@gmail.com' })
    );
  }));

  afterEach(() => {
    fixture.destroy();
  });
});
