import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/dto/user';

@Component({
  selector: 'app-navbar-ug',
  templateUrl: './navbar-ug.component.html',
  styleUrls: ['./navbar-ug.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarUgComponent {
  navbarOpen = false;

  @Input()
  user: User;

  @Input()
  appTitle: string;

  @Input()
  urlLogo: string;

  // TODO: remove any type
  @Input()
  infoConnection: any;

  /**
   * Event lié au click sur le bouton deconnexion : pas de remontée de data dans le $event
   */
  @Output() logoutClicked = new EventEmitter();

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  off(): void {
    this.logoutClicked.emit();
  }

}
