import { Component, OnInit } from '@angular/core';
import { UtilsService } from './shared/utils.service';
import { User } from './dto/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-storybook';
  user: User = {
    badge: 'A10000', nom: 'SMA', prenom: 'User', sitesGestion: ['SG1'],
    habilitations: ['EDIT'], profil: 'Administrateur', version: 'V-1.0.1'
  };
  urlLogo = 'assets/img/logosma_accueil.png';

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.initFaIcons();
  }

  clickBtn(flag: boolean): void {
    console.log('test');
  }
}
