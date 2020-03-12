import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SortData } from '../dto/sort-data';

@Injectable({
  providedIn: 'root'
})
export class SortService {

  private columnSortedSource = new Subject<SortData>();
  columnSorted$ = this.columnSortedSource.asObservable();

  constructor() { }

  columnSorted(event: SortData) {
    this.columnSortedSource.next(event);
  }

}
