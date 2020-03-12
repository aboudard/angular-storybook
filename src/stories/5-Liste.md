## Liste component
Ceci est un exemple de liste avec tri, filtres multicolonnes et pagination.
Elle n'est pas faite pour être utilisée dans l'état, mais pour s'en inspirer.
- On peut lui ajouter un @Input pour lui injecter la liste des objets à afficher
- On lui donnera un nom correspondant à son utilisation (ici elle d'appelle list-countries)

### Composant HTML parent
```html
<app-list-countries></app-list-countries>
```

### Dépendances / versions
Cette liste utilise Bootstrap pour la liste, ng-bootstrap pour le widget de pagination et ngx-order pour le tri. Le filtre est assuré par un custom @Pipe.

| ng-bootstrap | Angular | Bootstrap     | Ngx Order     | Angular Fontawesome |
| ------------ | ------- | ------------- | ------------- | ------------------- |
| 6.0.0        | 9.0.0   | 4.4.1         | 2.0.4         | 0.6.0               |

## Configuration

Dans le composant qui gère la liste nous avons besoin du @Pipe de filtre, et du composant qui affiche les icônes de tri.

```js
@NgModule({
  declarations: [
    SortableColumnComponent,
    FiltrePipe,
  ],
  imports: [
    NgbPaginationModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    OrderModule
  ],
  ...
})
export class YourAppModule {
}
```
Charger les icônes nécessaires pour les colonnes de tri via un service par exemple :

```js
@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private faIconLibrary: FaIconLibrary) { }

  initFaIcons(): void {
    this.faIconLibrary.addIcons(
      faChevronUp, faChevronDown
    );
  }

}
```
### Utilisation

La liste se compose des composants suivants :
- Etend la classe SortableComponent
- Un formulaire qui intègre les champs de filtrage
- Des composants de type SortableColumnComponent (qui consomme un service de pub/sub)
- La liste avec les différents pipes
- Le widget de pagination

#### Le template HTML
```html
<div class="card">
  <ng-container *ngIf="countries$ | async as countries; else loadingCountries">
    <form [formGroup]="formCountries">
      <table class="table table-striped">
        <thead class="thead-dark">
          <tr>
            <th scope="col">
              <app-sortable-column columnName="name" (clickSort)="sortTable($event)">Country</app-sortable-column>
            </th>
            <th scope="col">
              <app-sortable-column columnName="area" (clickSort)="sortTable($event)">Area</app-sortable-column>
            </th>
            <th scope="col">
              <app-sortable-column columnName="population" (clickSort)="sortTable($event)">Population
              </app-sortable-column>
            </th>
          </tr>
          <tr>
            <th><input class="form-control form-control-sm" type="text" name="name" formControlName="name"></th>
            <th><input class="form-control form-control-sm" type="text" name="area" formControlName="area"></th>
            <th><input class="form-control form-control-sm" type="text" name="population" formControlName="population"></th>
          </tr>
        </thead>
        <tbody>
          <tr *ngFor="let country of countries
          | filtre:false:false:filtres
          | orderBy: order:reverse
          | slice:start:end; index as i">
            <td>{{country.name}}</td>
            <td>{{country.area}}</td>
            <td>{{country.population}}</td>
          </tr>
        </tbody>
      </table>
      <div class="card-footer">
        <div class="row">
          <div class="col">
            <select class="custom-select custom-select-sm w-auto" [(ngModel)]="nbByPage"
              [ngModelOptions]="{standalone: true}" (change)="changeNbByPage()">
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
          </div>
          <div class="col">
            <ngb-pagination [(page)]="page" [rotate]="true" [boundaryLinks]="true" [pageSize]="nbByPage"
              [collectionSize]="countries.length" size="sm" (pageChange)="changePagination(page)"></ngb-pagination>
          </div>
        </div>

      </div>
    </form>
  </ng-container>
  <ng-template #loadingCountries>
    <div class="m-4 alert alert-primary" role="alert">
      Chargement ...
    </div>
  </ng-template>
</div>
```

#### Le composant typescript
```js
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
    ...
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
```

### Style de la liste

Pour modifier le fond des en-têtes de tableau qui contiennent les tris et filtres, on peut utiliser la classe .thead-dark et surcharger sa couleur dans le fichier variables.scss.

Dans le HTML :

```html
<table class="table table-striped">
        <thead class="thead-dark">
          ...
```

Dans le scss :

```
$table-dark-bg: map-get($theme-colors, 'primary') !default;
$table-dark-border-color: darken($table-dark-bg, 5);

```
