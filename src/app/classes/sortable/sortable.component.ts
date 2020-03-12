import { SortData } from 'src/app/dto/sort-data';

export class SortableComponent {

  // pagination
  page = 1;
  start = 0;
  end = 3;
  nbByPage = 3;
  // tri
  order = null;
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

  changeNbByPage(): void {
    this.nbByPage = parseInt(this.nbByPage.toString(), 0);
    this.page = 1;
    this.changePagination(1);
  }

}
