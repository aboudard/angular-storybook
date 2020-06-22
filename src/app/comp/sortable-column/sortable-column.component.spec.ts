import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortableColumnComponent } from './sortable-column.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSort, faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

describe('SortableColumnComponent', () => {
  let component: SortableColumnComponent;
  let fixture: ComponentFixture<SortableColumnComponent>;
  let faIconLibrary: FaIconLibrary;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SortableColumnComponent],
      imports: [
        FontAwesomeModule
      ],
      providers: [FaIconLibrary]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortableColumnComponent);
    component = fixture.componentInstance;
    faIconLibrary = TestBed.inject(FaIconLibrary);
    faIconLibrary.addIcons(
      faSort, faSortUp, faSortDown
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
