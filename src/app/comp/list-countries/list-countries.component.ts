import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from 'src/app/dto/country';
import { SortData } from 'src/app/dto/sort-data';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html',
  styleUrls: ['./list-countries.component.scss']
})
export class ListCountriesComponent implements OnInit {

  countries$: Observable<Country[]> = of([
    {
      name: 'Russia',
      area: 17075200,
      population: 146989754
    },
    {
      name: 'France',
      area: 640679,
      population: 64979548
    },
    {
      name: 'Canada',
      area: 9976140,
      population: 36624199
    },
    {
      name: 'United States',
      area: 9629091,
      population: 324459463
    },
    {
      name: 'China',
      area: 9596960,
      population: 1409517397
    }
  ]);

  order = 'area';
  reverse = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Tri de la liste via la colonne sur laquelle on vient de cliquer
   * @param champs: nom du champ et direction de tri
   */
  sortTable(champs: SortData): void {
    // tri
    this.reverse = (champs.sortDirection !== 'asc');
    this.order = champs.columnName;
  }

  changePagination(): void { }

}
