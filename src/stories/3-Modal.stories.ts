import { ModalPromptComponent } from 'src/app/comp/modal-prompt/modal-prompt.component';
import { moduleMetadata } from '@storybook/angular';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';

export default {
  title: 'Prompt SMA',
  component: ModalPromptComponent,
  decorators: [
    moduleMetadata({
      imports: [
        NgbModule
      ],
      providers: [
        NgbModal
      ]
    })
  ]
};

export const SimpleModal = () => ({
  component: ModalPromptComponent
});
