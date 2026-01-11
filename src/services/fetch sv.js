import { API_URL } from '../secrets';

//const token = localStorage.getItem('token')  ? JSON.parse(localStorage.getItem('token'))  : null



const getHeaders = async () => {
//  const token = await getToken();
//console.log('getheaders');
//console.log(localStorage.getItem('token'));
const token = localStorage.getItem('token')  ? JSON.parse(localStorage.getItem('token'))  : null;
//const user = JSON.parse(localStorage.getItem('user'));
//console.log(  localStorage.getItem('token'));
//const token = localStorage.getItem('token')  ? localStorage.getItem('token')  : null;

//console.log(token);
//  langue = await getLangue();
  const langue = 'fr';
  let lang = "en-EN"
  switch (langue) {
    case 'en':
      lang = "en-EN";
      break;
    case 'fr':
      lang = "fr-FR";
      break;
    default:
      lang = "fr-FR";

  };  

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
   // "X-CSRF-Token": "fetch",
    //'X-CSRFTOKEN': Cookies.get('csrftoken'),
    'Accept-Language': lang , 
    
  };

  //headers.Accept-Language = lng;
//  if (token) {
//    console.log(token);
    //if (localStorage.getItem('token')) {
    //headers.Authorization = 'Token ' + localStorage.getItem('token');
    //};
    if (token) {
      headers.Authorization =  'Token ' + token.token ;
    //  console.log(token.token);
    } ;
    
  // console.log(headers);
  return headers;
};


export const post = async (destination, body) => {
  const headers = await getHeaders();

  const result = await fetch(`${API_URL}${destination}`, {
    method: 'POST',
    headers,
          //credentials: "same-origin",
    body: JSON.stringify(body),
  });
let errorMessage = {};
switch (result.status) {
    case 200:
    case 201:
    case 202:
    case 203:
    case 204:
    case 205:
    case 206:
    case 207:
    case 208:
    case 209:
      return await result.json();
    case 400:
    case 404:
    case 409:
/*      const retour = await result.json();
      const proprietes = Object.getOwnPropertyNames(retour);
      var texteErreur = '';
      for (const propriete of proprietes) {
          const champ = retour[propriete];
          texteErreur += ' ' + propriete + ' - ' + champ;
      }; */
      //console.log(result);
      //console.log(result.text());
      return result.text().then(text => {throw new Error(text)})

//      errorMessage = {error: texteErreur };
//      throw errorMessage;
    default:
      return result.text().then(text => {throw new Error(text)})
//      errorMessage = { error: result.status };
//      throw errorMessage;
}    
  
};


/*
import { API_URL } from '../secrets';
import { getToken } from '../userModule/services/token';
import {getLangue} from '../rucherModule/services/getLangue';

*/



export const get = async (destination, body) => {
  const headers = await getHeaders();

  const result = await fetch(`${API_URL}${destination}`, {
    method: 'GET',
    headers,
    
  });

  if (result.ok) {
    return await result.json();
  }
  const errorMessage = { error: result.status };
  throw errorMessage;
};


export const put = async (destination, body) => {
  const headers = await getHeaders();
  //console.log("put");
  const result = await fetch(`${API_URL}${destination}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify(body),
  });
//    console.log(result);

//    console.log(body);

  if (result.ok) {
    return await result.json();
  }
  else {
  console.log('erreur');
//  throw { error: result.status };
  return result.text().then(text => {throw new Error(text)})
//  const errorMessage = { error: result.status };
//  throw errorMessage;
  }
};

export const del = async (destination) => {
  const headers = await getHeaders();

  const result = await fetch(`${API_URL}${destination}`, {
    method: 'DELETE',
    headers,
    body:JSON.stringify(''),
  });
//    console.log('retour del');
//    console.log(result);


  if (result.ok) {
    return await result.json();
  }
//  console.log('fetch - del');
//  console.log(result);
//  console.log(result.status);
  //const errorMessage = {error: result.status };
  //throw errorMessage;
  return result.text().then(text => {throw new Error(text)})


};

export const options = async (destination, body) => {
  const headers = await getHeaders();

  const result = await fetch(`${API_URL}${destination}`, {
    method: 'OPTIONS',
    headers,
  });

  if (result.ok) {
    return await result.json();
  }
  const errorMessage = { error: result.status };
  throw errorMessage;

};

