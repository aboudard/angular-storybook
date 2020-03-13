import { provideFa } from './utils';
import { moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';
import { ListCountriesComponent } from 'src/app/comp/list-countries/list-countries.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SortableColumnComponent } from 'src/app/comp/sortable-column/sortable-column.component';
import { FiltrePipe } from 'src/app/shared/pipes/filtre.pipe';
import { OrderModule } from 'ngx-order-pipe';
import md from './5-Liste.md';
import { Country } from 'src/app/dto/country';
import { Observable, of } from 'rxjs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Liste',
  component: ListCountriesComponent,
  parameters: { notes: md },
  decorators: [
    withKnobs,
    moduleMetadata(provideFa),
    moduleMetadata({
      declarations: [
        ListCountriesComponent,
        SortableColumnComponent,
        FiltrePipe
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        OrderModule,
        NgbModule
      ],
    })
  ]
};

const countries$: Observable<Country[]> = of([
  {
    id: 0,
    name: 'Russia',
    area: 17075200,
    population: 146989754
  },
  {
    id: 1,
    name: 'France',
    area: 640679,
    population: 64979548
  },
  {
    id: 2,
    name: 'Canada',
    area: 9976140,
    population: 36624199
  },
  {
    id: 3,
    name: 'United States',
    area: 9629091,
    population: 324459463
  },
  {
    id: 4,
    name: 'China',
    area: 9596960,
    population: 1409517397
  },
  {
    id: 5,
    name: 'Other',
    area: 95969,
    population: 140
  },
  {
    id: 6,
    name: 'Utopia',
    area: 555555555,
    population: 1
  },
  {
    id: 7,
    name: 'Germany',
    area: 621211,
    population: 65214652
  }
]);

export const ListeTemplate = () => ({
  template: `<app-list-countries (validCountry)="receiveCountry($event)" [countries]="countries$ | async"></app-list-countries>`,
  props: {
    countries$,
    receiveCountry: action('Action liée au bouton')
  }
});
ListeTemplate.story = {
  name: 'Liste avec tri filtre pagination'
};
