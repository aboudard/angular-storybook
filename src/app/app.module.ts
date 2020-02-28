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

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    ModalPromptComponent,
    NavbarComponent,
    NavbarUgComponent,
    ListCountriesComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
