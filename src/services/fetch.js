import { API_URL } from '../secrets';
import axios from "axios";

//const token = localStorage.getItem('token')  ? JSON.parse(localStorage.getItem('token'))  : null



const getHeaders = async () => {
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

  var token = '';

  if (localStorage.getItem('token')) {
    try {
      token = JSON.parse(localStorage.getItem('token'))
    } catch (e) {
      token = null;
    }
  } else {
    token = null;
  };

  const headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Accept-Language': lang,

  };

  if (token) {
    headers.Authorization = 'Token ' + token.token;
    //  console.log(token.token);
  };
  return headers;
};

const getHeadersMultiPart = async () => {

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


  var token = '';

  if (localStorage.getItem('token')) {
    try {
      token = JSON.parse(localStorage.getItem('token'))
    } catch (e) {
      token = null;
    }
  } else {
    token = null;
  };




  const headers = {
    'Accept-Language': lang,
  };

  if (token) {
    headers.Authorization = 'Token ' + token.token;
  };

  return headers;
};




export const post = async (destination, body) => {
  console.log('post ------------------------------------------');
  console.log(API_URL + destination);
  const headers = await getHeaders();

  axios.defaults.withXSRFToken = true;
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  try {
    const response = await axios
      .post(API_URL + destination, body, {
        withCredentials: true,
        headers,


      });
      console.log('retour post');
      console.log(response);
    return response.data;

  }
  catch (error) {
    console.log('error axios post -----------------------------');
    console.log(error);
    
    const result = error.response;
    const err = new Error();
    if (result) {
    console.log(result);
 
    const texteErreur = result.statusText;
    console.log(error.response.request.responseText);
    console.log(result.request.responseText)
    err.message = texteErreur + ' ' + result.request.responseText;
    err.status = result.status;
    throw err;}
    else {
      err.message = error.message
      err.status = 500;
      throw err;
    }
/*
    const result = error.response;
    const proprietes = Object.getOwnPropertyNames(result.data);
    var texteErreur = '';
    for (const propriete of proprietes) {
      const champ = result.data[propriete];
      texteErreur += champ + ' ';
    };

    throw { message: texteErreur };
    */


  };
};




export const get = async (destination, body) => {
  const headers = await getHeaders();


  axios.defaults.withXSRFToken = true;
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  try {
    const response = await axios.get(API_URL + destination, {
      headers,
      withCredentials: true,
    }
    );


    return response.data;
  }
  catch (error) {
    console.log('error axios -----------------------------');
    console.log(error);
        const result = error.response;

        if (result) {
    console.log(result);
 
    const texteErreur = result.statusText;
    console.log(error.response.request.responseText);
    console.log(result.request.responseText)
    throw { message: texteErreur + ' ' + result.request.responseText, status: result.status  };}
    else {
      throw { message: error.message , status: 500 };
    }
    /*
    const result = error.response;
    console.log(result);
 
    const texteErreur = result.statusText;
    throw { message: texteErreur, status: result.status };
*/

  }


};


export const put = async (destination, body) => {
  const headers = await getHeaders();

  try {
    const response = await axios
      .put(API_URL + destination, body, {
        withCredentials: true,
        headers,


      });
    return response.data;

  }
  catch (error) {

    const result = error.response;

    //console.log(result.data.detail);
    const proprietes = Object.getOwnPropertyNames(result.data);
    var texteErreur = '';
    for (const propriete of proprietes) {
      const champ = result.data[propriete];
      texteErreur += champ + ' ';
    };

    throw { message: texteErreur };


  };
};

export const del = async (destination) => {
  const headers = await getHeaders();
  console.log('delete ------------------------------------------');

  axios.defaults.withXSRFToken = true;
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  try {
    const response = await axios.delete(API_URL + destination, {
      headers,
      withCredentials: true,
    }
    );

    return response.data;
  }
  catch (error) {

    const result = error.response;
    const texteErreur = result.statusText;
    throw { message: texteErreur };
  }
};

export const options = async (destination, body) => {
  /* const headers = await getHeaders();
  axios.defaults.withXSRFToken = true;
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";
    try {
    const response = await axios
      .options(API_URL + destination, body, {
        withCredentials: true,
        headers,
      });
    return response.data;
  }
  catch (error) {
    const result = error.response;
    const proprietes = Object.getOwnPropertyNames(result.data);
    var texteErreur = '';
    for (const propriete of proprietes) {
      const champ = result.data[propriete];
      texteErreur += champ + ' ';
    };
    throw { message: texteErreur };
  }; */
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

export const putMultiPart = async (destination, body) => {
  const headers = await getHeadersMultiPart();
  axios.defaults.withXSRFToken = true;
  axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
  axios.defaults.xsrfCookieName = "csrftoken";

  try {
    const response = await axios
      .post(API_URL + destination, body, {
        withCredentials: true,
        headers,
      });
    return response.data;
  }
  catch (error) {
    const result = error.response;
    const proprietes = Object.getOwnPropertyNames(result.data);
    var texteErreur = '';
    for (const propriete of proprietes) {
      const champ = result.data[propriete];
      texteErreur += champ + ' ';
    };
    throw { message: texteErreur };
  };

};


