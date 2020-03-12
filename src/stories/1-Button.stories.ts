import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ButtonComponent } from 'src/app/comp/button/button.component';
import { moduleMetadata } from '@storybook/angular';
import { select, withKnobs } from '@storybook/addon-knobs';
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
const optionsIcone = ['', 'search', 'check', 'power-off'];
export const Text = () => ({
  component: ButtonComponent,
  props: {
    label: 'Hello Button',
    size: select('Taille', optionsTaille, null),
    color: select('Couleur', optionsCouleur, 'primary'),
    icon: select('Icône', optionsIcone, 'search'),
  },
});

Text.story = {
  name: 'Bouton avec ou sans icône'
};

export const TextTemplate = () => ({
  template: `<app-button color="primary" icon="check" label="Bouton" (btnClicked)="clicked()"></app-button>`,
  props: {
    clicked: action('Action liée au bouton via template')
  }
});
TextTemplate.story = {
  name: 'Bouton via template'
};

export const ButtonWithAction = () => ({
  component: ButtonComponent,
  props: {
    label: 'Avec action',
    color: 'success',
    clickBtn: action('Action liée au bouton'),
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
