import fetch from 'isomorphic-fetch';

export const fetchThenDispatch = (dispatch, url, method, body) =>
  fetch(
    url,
    {
      method,
      body,
      headers: { 'Content-Type' : 'application/json' }
    }
  );

export const fetchWithJson = (url, method, body) =>
  fetch(
    url,
    {
      method,
      body,
      headers: { 'Content-Type' : 'application/json' }
    }
  );


