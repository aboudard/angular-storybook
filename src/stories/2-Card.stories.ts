import { CardComponent } from 'src/app/comp/card/card.component';
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import md from './2-Card.md';

export default {
  title: 'Card SMA',
  component: CardComponent,
  parameters: { notes: md },
  decorators: [withKnobs]
};

export const SimpleCard = () => ({
  component: CardComponent,
  props: {
    header: 'Hello Card',
    title: 'This the title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    btnClicked: action('👊 Button was clicked')
  },
});

export const BackgroundHeaderCard = () => ({
  component: CardComponent,
  props: {
    type: text('Header bg', 'primary'),
    color: text('Header', 'white'),
    header: 'Hello Card',
    title: 'This the title',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
    btnClicked: action('👊 Button was clicked')
  },
});

BackgroundHeaderCard.story = {
  parameters: { notes: md },
};
