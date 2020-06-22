import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ButtonComponent } from './comp/button/button.component';
import { ListCountriesComponent } from './comp/list-countries/list-countries.component';
import { CardComponent } from './comp/card/card.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { NavbarUgComponent } from './comp/navbar-ug/navbar-ug.component';
import { OrderModule } from 'ngx-order-pipe';
import { FiltrePipe } from './shared/pipes/filtre.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ModalPromptComponent } from './comp/modal-prompt/modal-prompt.component';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { SortableColumnComponent } from './comp/sortable-column/sortable-column.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        OrderModule,
        FontAwesomeModule,
        ReactiveFormsModule,
        FormsModule,
        NgbPaginationModule
      ],
      declarations: [
        AppComponent,
        NavbarComponent,
        NavbarUgComponent,
        ButtonComponent,
        ListCountriesComponent,
        CardComponent,
        FiltrePipe,
        ModalPromptComponent,
        SortableColumnComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-storybook'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-storybook');
  });

});
