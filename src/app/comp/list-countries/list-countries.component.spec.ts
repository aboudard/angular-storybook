import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListCountriesComponent } from './list-countries.component';
import { Country } from 'src/app/dto/country';
import { Component } from '@angular/core';
import { OrderModule } from 'ngx-order-pipe';
import { FiltrePipe } from 'src/app/shared/pipes/filtre.pipe';
import { SortableColumnComponent } from '../sortable-column/sortable-column.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSearch, faSort } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: `app-host`,
  template: `<app-list-countries [countries]="countries"></app-list-countries>`
})
class TestHostComponent {
  countries: Country[] = [
    {
      area: 2000, id: 0, name: 'test', population: 6
    }
  ];
}

describe('ListCountriesComponent', () => {
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let faIconLibrary: FaIconLibrary;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [OrderModule, NgbPaginationModule, ReactiveFormsModule, FormsModule, FontAwesomeModule],
      declarations: [ListCountriesComponent, TestHostComponent, FiltrePipe, SortableColumnComponent],
      providers: [FaIconLibrary]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    faIconLibrary = TestBed.inject(FaIconLibrary);
    faIconLibrary.addIcons(
      faSearch, faSort
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
