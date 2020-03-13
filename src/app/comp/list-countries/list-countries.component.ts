import { Component, Input, Output, EventEmitter } from '@angular/core';
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
   */
  @Input()
  countries: Country[];

  /**
   * Event lancé au clic sur l'action de liste
   */
  @Output()
  validCountry = new EventEmitter<number>();

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

  /**
   * Méthode d'appel d'événement au clic sur une action
   * @param id de l\'item de liste
   */
  valid(id: number): void {
    this.validCountry.emit(id);
  }

}
