import { Injectable } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faCheck, faSearch, faPowerOff, faChevronUp, faChevronDown
} from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private faIconLibrary: FaIconLibrary) { }

  initFaIcons(): void {
    this.faIconLibrary.addIcons(
      faCheck, faSearch, faPowerOff, faChevronUp, faChevronDown
    );
  }

}
