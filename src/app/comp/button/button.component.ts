import { Component, OnInit, EventEmitter, Output, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * Composant bouton avec texte, couleur, taille et icône paramétrables
 * Aucun code fonctionnel dans le composant, il se contente d'appeler une méthode du parent
 * @example
 * <app-button color="primary" icon="check" label="Bouton" (btnClicked)="clickBtn($event)">
 * </app-button>
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {

  /**
   * Label : le texte affiché sur le bouton
   */
  @Input()
  label: string;

  /**
   * Color: la couleur au sens bootstrap variable, sans préfixe bg- ou text-
   * https://getbootstrap.com/docs/4.4/utilities/colors/
   */
  @Input()
  color: string;

  /**
   * Taille du bouton au sens bootstrap, sans préfixe : sm ou lg
   * https://getbootstrap.com/docs/4.4/components/buttons/#sizes
   */
  @Input()
  size: string;

  /**
   * Icône affichée sur le bouton, à gauche du label
   * Tirée du catalogue fontawesome, implémenté via angular-fontawesome
   * https://github.com/FortAwesome/angular-fontawesome
   */
  @Input()
  icon: string;

  /**
   * Event lié au click sur le bouton : pas de remontée de data dans le $event
   */
  @Output() btnClicked = new EventEmitter();

  clickBtn(): void {
    this.btnClicked.emit();
  }

}
