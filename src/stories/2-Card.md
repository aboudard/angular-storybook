# Card component
- Utilisation du composant Card avec différentes options
- Simple
- Avec Header de couleur
- Avec boutons interactifs

### Composant TypeScript
```ts
@Input()
type = 'bg-light';

@Input()
typeText: string;
```

### Composant HTML parent
```html
<app-card [header]="'Test'" 
  [title]="'Autre'" (btnClicked)="clickBtn($event)"
  [content]="'With supporting text below as a natural lead-in to additional content.'">
</app-card>
```
