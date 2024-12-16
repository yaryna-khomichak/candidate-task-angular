import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { provideMockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { loadEmployees } from './store';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
      providers: [provideMockStore({ initialState: { employee: {} } })],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should dispatch loadEmployees on init', () => {
    const store = TestBed.inject(Store);
    spyOn(store, 'dispatch');
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    expect(store.dispatch).toHaveBeenCalledOnceWith(loadEmployees());
  });
});
