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

export default {
  title: 'Liste',
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

export const ListeTemplate = () => ({
  template: `<app-list-countries></app-list-countries>`
});
ListeTemplate.story = {
  name: 'Liste avec tri filtre pagination'
};
