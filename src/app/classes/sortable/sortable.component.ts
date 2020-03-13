import { SortData } from 'src/app/dto/sort-data';

export class SortableComponent {

  /**
   * Page courante
   */
  page = 1;
  /**
   * Index de début de la pagination
   */
  start = 0;
  /**
   * Index de fin de la pagination
   */
  end = 3;
  /**
   * Nombre d'items par page
   */
  nbByPage = 3;
  /**
   * Objet contenant les champs de tri
   */
  order = null;
  /**
   * Ordre de tri
   */
  reverse = false;

  /**
   * Tri de la liste via la colonne sur laquelle on vient de cliquer
   * @param champs: nom du champ et direction de tri
   */
  sortTable(champs: SortData): void {
    // tri
    this.reverse = (champs.sortDirection !== 'asc');
    this.order = champs.columnName;
  }

  /**
   * Changement de pagination
   * @param page: le numéro de page envoyé par la barre de pagination
   */
  changePagination(page: number): void {
    this.start = (page - 1) * this.nbByPage;
    this.end = this.start + this.nbByPage;
  }

  /**
   * Changement du nombre d'items par page
   */
  changeNbByPage(): void {
    this.nbByPage = parseInt(this.nbByPage.toString(), 0);
    this.page = 1;
    this.changePagination(1);
  }

}
