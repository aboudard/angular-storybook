import { NavbarComponent } from 'src/app/comp/navbar/navbar.component';
import { provideFa } from './utils';
import { moduleMetadata } from '@storybook/angular';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Navbar',
  component: NavbarComponent,
  decorators: [
    withKnobs,
    moduleMetadata(provideFa),
    moduleMetadata({
      declarations: [NavbarComponent]
    })
  ]
};

const user = {
  badge: 'A10000', nom: 'SMA', prenom: 'User', sitesGestion: ['SG1'],
  habilitations: ['EDIT'], profil: 'Administrateur', version: 'V-1.0.1'
};

export const NavbarTemplate = () => ({
  template: `<app-navbar [user]="user" [appTitle]="appTitle" [urlLogo]="urlLogo"></app-navbar>`,
  props: {
    user: user,
    urlLogo: 'assets/img/logosma_accueil.png',
    appTitle: 'Storybook angular'
  }
});
NavbarTemplate.story = {
  name: 'Navbar via template'
};
