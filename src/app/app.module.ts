import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { CardComponent } from './comp/card/card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './comp/button/button.component';
import { ModalPromptComponent } from './comp/modal-prompt/modal-prompt.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { NavbarUgComponent } from './comp/navbar-ug/navbar-ug.component';
import { ListCountriesComponent } from './comp/list-countries/list-countries.component';
import { OrderModule } from 'ngx-order-pipe';
import { SortableColumnComponent } from './comp/sortable-column/sortable-column.component';
import { FiltrePipe } from './shared/pipes/filtre.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    ModalPromptComponent,
    SortableColumnComponent,
    FiltrePipe,
    NavbarComponent,
    NavbarUgComponent,
    ListCountriesComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgbModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
