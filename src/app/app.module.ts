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

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    ButtonComponent,
    ModalPromptComponent,
    NavbarComponent,
    NavbarUgComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
