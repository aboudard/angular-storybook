import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ButtonComponent } from 'src/app/comp/button/button.component';
import { moduleMetadata } from '@storybook/angular';
import { text, withKnobs } from '@storybook/addon-knobs';
import { provideFa } from './utils';
import md from './1-Button.md';

export default {
  title: 'Button',
  component: ButtonComponent,
  parameters: { notes: md },
  decorators: [
    withKnobs,
    moduleMetadata(provideFa)
  ]
};

export const Text = () => ({
  component: ButtonComponent,
  props: {
    label: 'Hello Button',
    size: text('Taille', null),
    color: text('Couleur', 'primary'),
    icon: text('Icône', 'check'),
  },
});

Text.story = {
  name: 'Bouton avec ou sans icône'
}

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
