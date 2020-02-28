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
  titleReglement = 'Règlement';
  user: User = {
    badge: 'A10000', nom: 'SMA', prenom: 'User', siteGestion: 'SG26', sgLabel: 'UGS Auto flottes',
    posteOp: 'SG12SALI', habilitations: ['EDIT'], profil: 'Administrateur', version: 'V-1.0.1'
  };
  infoConnection = {
    lastLogin: 1582820287, currentTime: Date.now()
  };
  urlLogo = 'assets/img/logosma_accueil.png';

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.initFaIcons();
  }

  clickBtn(): void {
    console.log('test');
  }
}
