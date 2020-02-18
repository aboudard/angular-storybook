## Card component
- Utilisation du composant Card avec différentes options
- Simple
- Avec Header de couleur
- Avec boutons interactifs

### Composant HTML parent
```html
<app-card [header]="variable du composant" 
  title="Valeur en dur" (btnClicked)="clickBtn($event)"
  [content]="'With supporting text below as a natural lead-in to additional content.'">
</app-card>
```
