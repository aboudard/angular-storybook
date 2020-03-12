import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Country } from 'src/app/dto/country';
import { SortableComponent } from 'src/app/classes/sortable/sortable.component';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-list-countries',
  templateUrl: './list-countries.component.html'
})
export class ListCountriesComponent extends SortableComponent {

  /**
   * Le formulaire de filtre
   */
  formCountries: FormGroup;
  /**
   * La liste de données
   * Peut également être déclarée en '@Input'
   */
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
    },
    {
      name: 'Other',
      area: 95969,
      population: 140
    },
    {
      name: 'Utopia',
      area: 555555555,
      population: 1
    },
    {
      name: 'Germany',
      area: 621211,
      population: 65214652
    }
  ]);

  /**
   * Construction du formulaire de filtre
   */
  constructor() {
    super();
    this.formCountries = new FormGroup({
      name: new FormControl(''),
      area: new FormControl(''),
      population: new FormControl('')
    });
  }

  /**
   * Getter de composant pour injecter les données du formulaire dans le pipe de filtre
   */
  get filtres(): any {
    return this.formCountries.value;
  }

}
