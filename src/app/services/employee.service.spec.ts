import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EmployeeService],
    });

    service = TestBed.inject(EmployeeService);
  });

  describe('getEmployees', () => {
    it('should return a list of employees', (done: DoneFn) => {
      service.getEmployees().subscribe((employees) => {
        expect(employees.length).toBeGreaterThan(0);
        expect(employees[0].name).toEqual('Alice Johnson');
        done();
      });
    });
  });
});
