import { User } from '../dto/user';

export const mockUser: User = {
  sitesGestion: ['SG1', 'SG9'],
  prenom: 'Admin',
  nom: 'SMA',
  badge: 'A10000',
  habilitations: ['EXTRAIRE_CSV',
    'MAJ_ETAT_SUIVI_CAMPAGNE',
    'UPDATE_CAMPAGNE',
    'IMPORT_FICHIER_DMRI',
    'MAJ_ARRET_TRAITEMENT',
    'EXPORT_LOGIBAT',
    'MAJ_PHOTO_POLICE',
    'REMOVE_CAMPAGNE',
    'CONSULTER_PHOTO_POLICE'],
  version: '1.0.0',
  profil: 'Administrateur',
  posteOp: 'Autre',
  sgLabel: ''
};
