import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ButtonComponent } from 'src/app/comp/button/button.component';
import { moduleMetadata } from '@storybook/angular';
import { text, select, withKnobs } from '@storybook/addon-knobs';
import { provideFa } from './utils';
import md from './1-Button.md';

export default {
  title: 'Button',
  component: ButtonComponent,
  parameters: { notes: md },
  decorators: [
    withKnobs,
    moduleMetadata(provideFa),
    moduleMetadata({
      declarations: [ButtonComponent]
    })
  ]
};

const optionsTaille = ['', 'sm', 'lg'];
const optionsCouleur = ['', 'primary', 'secondary', 'warning', 'success', 'danger', 'outline-primary', 'outline-secondary'];
export const Text = () => ({
  component: ButtonComponent,
  props: {
    label: 'Hello Button',
    size: select('Taille', optionsTaille, null),
    color: select('Couleur', optionsCouleur, 'primary'),
    icon: text('Icône', 'check'),
  },
});

Text.story = {
  name: 'Bouton avec ou sans icône'
};

export const TextTemplate = () => ({
  template: `<app-button color="primary" icon="check" label="Bouton" (btnClicked)="clickBtn($event)"></app-button>`
});
TextTemplate.story = {
  name: 'Bouton via template'
};

export const ButtonWithAction = () => ({
  component: ButtonComponent,
  props: {
    label: 'Avec action',
    color: 'success',
    btnClicked: action('This was clicked OMG'),
  },
});

ButtonWithAction.story = {
  name: 'Bouton avec action'
};

export const ButtonWithLinkToAnotherStory = () => ({
  component: ButtonComponent,
  props: {
    color: 'danger',
    size: 'sm',
    label: 'Lien vers une autre Story',
    onClick: linkTo('Card SMA'),
  },
});

ButtonWithLinkToAnotherStory.story = {
  name: 'Bouton with link to another story',
};
