import { TestBed } from '@angular/core/testing';

import { SortService } from './sort.service';

describe('SortService', () => {

  let service: SortService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should catch what is emitted', () => {
    service.columnSorted$.subscribe((res) => {
      expect(res.columnName).toEqual('test');
      expect(res.sortDirection).toEqual('asc');
    });
    service.columnSorted({ columnName: 'test', sortDirection: 'asc' });
  });

});
