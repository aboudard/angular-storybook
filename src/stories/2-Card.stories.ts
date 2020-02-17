import { CardComponent } from 'src/app/comp/card/card.component';
import { action } from '@storybook/addon-actions';
import md from './2-Card.md';

export default {
  title: 'Card SMA',
  component: CardComponent
};

export const Simple = () => ({
  component: CardComponent,
  props: {
    header: 'Hello Card',
    title: 'This the title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    btnClicked: action('👊 Button was clicked')
  },
});

export const BackgroundHeader = () => ({
  component: CardComponent,
  props: {
    type: 'bg-primary',
    typeText: 'text-white',
    header: 'Hello Card',
    title: 'This the title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    btnClicked: action('👊 Button was clicked')
  },
});

BackgroundHeader.story = {
  parameters: { notes: md },
};
