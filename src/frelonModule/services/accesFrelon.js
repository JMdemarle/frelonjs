import { get, options, put, post, del } from '../../services/fetch';

export const getListTypePiege   = () => {
  return get('/ListTypePiege');
};

export const getListCampagne   = () => {
  return get('/ListCampagne');
};

export const getListPiegesDePiegeur   = () => {
  return get('/ListPiegesDePiegeur');
}

export const getListTypeInsecte   = () => {
  return get('/ListTypeInsecte');
}

export const getListTypeAppat   = () => {
  return get('/ListTypeAppat');
}

export const createPiege = async (Piege) => {

  let TypePiege = Piege.TypePiege;
  let campagne = Piege.campagne;
  let piegeur = Piege.piegeur;
  let actif = Piege.actif;
  let nom = null;
  Piege.nom == "" ? nom = null: nom = Piege.nom;
  let latitude = Piege.latitude;
  let longitude = Piege.longitude;
  return post ('/NewPiegeUtilise' , {nom, TypePiege, campagne, piegeur, actif, latitude, longitude});


  /*
  let DateEntree = Entree.DateEntree;
  let ObjetEntree = Entree.ObjetEntree;
  let TexteEntree = null;
  Entree.TexteEntree == "" ? TexteEntree = null: TexteEntree = Entree.TexteEntree;
  let ThemeEntree = Entree.idTheme;
  return post ('/NewEntree' , {ThemeEntree, DateEntree, ObjetEntree, TexteEntree});
  */
};

//    fields = ('id', 'piegeur', 'campagne', 'TypePiege', 'nom', 'actif', 'nomTypePiege')


export const modifyPiege = async (Piege) => {

  let id = Piege.id;
  let TypePiege = Piege.TypePiege;
  let campagne = Piege.campagne;
  let piegeur = Piege.piegeur;
  let actif = Piege.actif;
  let nom = null;
  Piege.nom == "" ? nom = null: nom = Piege.nom;
  let latitude = Piege.latitude;
  let longitude = Piege.longitude;
  return put('/DetPiegeUtilise/' + Piege.id , {nom, TypePiege, campagne, piegeur, actif, latitude, longitude});
  /*
  console.log(Entree);
  let DateEntree = Entree.DateEntree;
  let ObjetEntree = Entree.ObjetEntree;
  let TexteEntree = null;

  Entree.TexteEntree == "" ? TexteEntree = null: TexteEntree = Entree.TexteEntree;
  let ThemeEntree = Entree.idTheme;
 return put('/DetEntree/' + Entree.id , {ThemeEntree, DateEntree, ObjetEntree, TexteEntree});
 */
};

export const getDerniersRelevesParPiege = () => {
  return get('/DerniersRelevesParPiege');
};

export const creeReleves = async (lesReleves) => {

  return post('/CreeReleves', { lesReleves });
};