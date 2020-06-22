import { Component, OnInit } from '@angular/core';
import { UtilsService } from './shared/utils.service';
import { User } from './dto/user';
import { Observable, of } from 'rxjs';
import { Country } from './dto/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-storybook';
  titleReglement = 'Règlement';
  user: User = {
    badge: 'A10000', nom: 'SMA', prenom: 'User', sitesGestion: ['SG26'], sgLabel: 'UGS Auto flottes',
    posteOp: 'SG12SALI', habilitations: ['EDIT'], profil: 'Administrateur', version: 'V-1.0.1'
  };
  infoConnection = {
    lastLogin: 1582820287, currentTime: Date.now()
  };
  urlLogo = 'assets/img/logosma_accueil.png';

  countries$: Observable<Country[]> = of([
    {
      id: 0,
      name: 'Russia',
      area: 17075200,
      population: 146989754
    },
    {
      id: 1,
      name: 'France',
      area: 640679,
      population: 64979548
    },
    {
      id: 2,
      name: 'Canada',
      area: 9976140,
      population: 36624199
    },
    {
      id: 3,
      name: 'United States',
      area: 9629091,
      population: 324459463
    },
    {
      id: 4,
      name: 'China',
      area: 9596960,
      population: 1409517397
    },
    {
      id: 5,
      name: 'Other',
      area: 95969,
      population: 140
    },
    {
      id: 6,
      name: 'Utopia',
      area: 555555555,
      population: 1
    },
    {
      id: 7,
      name: 'Germany',
      area: 621211,
      population: 65214652
    }
  ]);

  constructor(private utilsService: UtilsService) { }

  ngOnInit() {
    this.utilsService.initFaIcons();
  }

  clickBtn(): void {
    console.log('test');
  }

  receiveCountry(id: number): void {
    console.log(`valid country ${id}`);
  }

}
