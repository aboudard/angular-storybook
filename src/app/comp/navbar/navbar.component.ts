import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { User } from '../../dto/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  navbarOpen = false;

  @Input()
  user: User;

  @Input()
  appTitle: string;

  @Input()
  urlLogo: string;

  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
