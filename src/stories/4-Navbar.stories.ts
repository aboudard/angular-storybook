import { NavbarComponent } from 'src/app/comp/navbar/navbar.component';
import { provideFa } from './utils';
import { moduleMetadata } from '@storybook/angular';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import { NavbarUgComponent } from 'src/app/comp/navbar-ug/navbar-ug.component';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Navbar',
  decorators: [
    withKnobs,
    moduleMetadata(provideFa),
    moduleMetadata({
      declarations: [NavbarComponent, NavbarUgComponent]
    })
  ]
};

const user = {
  badge: 'A10000', nom: 'SMA', prenom: 'User', siteGestion: 'SG26', sgLabel: 'UGS Auto flottes',
  posteOp: 'SG12SALI', habilitations: ['EDIT'], profil: 'Administrateur', version: 'V-1.0.1'
};
const infoConnection = {
  lastLogin: 1582820287, currentTime: Date.now()
};
const optionsRoles = ['Basic', 'Gestionnaire', 'Directeur', 'Administrateur'];

export const NavbarTemplate = () => ({
  template: `<app-navbar [user]="user" [appTitle]="appTitle" [urlLogo]="urlLogo"></app-navbar>`,
  props: {
    user: { ...user, profil: select('Rôle', optionsRoles, 'Basic') },
    urlLogo: 'assets/img/logosma_accueil.png',
    appTitle: 'Application'
  }
});
NavbarTemplate.story = {
  name: 'Navbar simple'
};

export const NavbarugTemplate = () => ({
  template: `<app-navbar-ug [infoConnection]="infoConnection" [user]="user"
    [appTitle]="appTitle" [urlLogo]="urlLogo" (logoutClicked)="clickBtn()">
  </app-navbar-ug>`,
  props: {
    user: {
      ...user,
      siteGestion: text('Site gestion', 'SG26'),
      posteOp: text('Poste opérationnel', 'SG12SALI')
    },
    infoConnection,
    urlLogo: 'assets/img/logosma_accueil.png',
    appTitle: 'Application',
    clickBtn: action('Action de déconnexion')
  }
});
NavbarugTemplate.story = {
  name: 'Navbar avec UG'
};
