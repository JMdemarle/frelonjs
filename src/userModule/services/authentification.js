import { ConstructionOutlined } from '@mui/icons-material';
import { post, get, put, del } from '../../services/fetch';
//import { post, get, put, options } from '../../services/fetch';
//import { setIdApiculteur } from '../../rucherModule/services/idApiculteur';
//import { setLangue } from '../../rucherModule/services/getLangue';

export const login = (username, password) => {
  localStorage.setItem('token', null);

  return post('/api-token-auth/', {
     username, password });
};


export const createAccount = (username, email, password1, password2) => {
//    console.log(username);
//    console.log(password1);
  return post ('/dj-rest-auth/registration/', { username, email, password1, password2 }
  );
};

export const modPiegeur = (idPiegeur, nom, langage) => {
  return put ('/DetPiegeur/' + idPiegeur, {nom, langage});
};
/*
export const changePassword = ( oldpassword, new_password1, new_password2) => {
//    console.log(oldpassword);
//    console.log(password1);
  return post ('/dj-rest-auth/password/change/', { oldpassword, new_password1, new_password2 }
  );
};

*/
// a remplacer par retrieve
export const retrievePiegeur = () => {
  get ('/RetrievePiegeur')
  .then( (item) => {
//    setIdApiculteur(item.id);
//    setLangue(item.langage);
    console.log(item);
    return item; });
};

export const postPasswordReset = (email) => {
  return post ('/password_reset/', {email})
}

export const confirmPassword = (token, password) => {
  console.log(token);
  return post ('/password_reset/confirm/', {token, password})
}


export const retrievePiegeurTotal = () => {
  return get ('/RetrievePiegeur');
};

/*

export const getOptionsApiculteur = () => {
  return options ('/RetrieveApiculteurV2');
};
*/
