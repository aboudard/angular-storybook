import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { ButtonComponent } from 'src/app/comp/button/button.component';

export default {
  title: 'Button',
  component: ButtonComponent,
};

export const Text = () => ({
  component: ButtonComponent,
  props: {
    label: 'Hello Button',
    color: 'primary'
  },
});

export const WithSomeEmojiAndAction = () => ({
  component: ButtonComponent,
  props: {
    label: 'Avec action',
    color: 'success',
    btnClicked: action('This was clicked OMG'),
  },
});

WithSomeEmojiAndAction.story = {
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
