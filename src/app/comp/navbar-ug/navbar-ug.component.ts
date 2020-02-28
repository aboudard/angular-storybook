import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
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

  constructor() { }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  off(): void {
    console.log('off');
  }

}
