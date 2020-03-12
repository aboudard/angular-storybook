import { Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { SortData } from '../../dto/sort-data';
import { SortService } from 'src/app/shared/sort.service';


@Component({
  selector: 'app-sortable-column',
  templateUrl: './sortable-column.component.html'
})
export class SortableColumnComponent implements OnInit, OnDestroy {

  constructor(private sortService: SortService) { }

  @Input()
  columnName: string;

  @Input()
  sortDirection = '';

  @Output()
  clickSort = new EventEmitter<SortData>();

  private columnSortedSubscription: Subscription;

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.clickSort.emit({ columnName: this.columnName, sortDirection: this.sortDirection });
    this.sortService.columnSorted({ columnName: this.columnName, sortDirection: this.sortDirection });
  }

  ngOnInit() {
    // subscribe to sort changes so we can react when other columns are sorted
    this.columnSortedSubscription = this.sortService.columnSorted$.subscribe(event => {
      // reset this column's sort direction to hide the sort icons
      if (this.columnName !== event.columnName) {
        this.sortDirection = '';
      }
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }

}
