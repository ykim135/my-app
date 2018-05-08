import fetch from 'isomorphic-fetch';

import axios from 'axios';

export const fetchWithJson = (url, method, body) =>
  fetch(
    url,
    {
      method,
      body,
      headers: { 'Content-Type' : 'application/json' }
    }
  );

export const fetchWithHeader = (url, talkUserHeader) => {
  axios
    .get(
      url,
      { headers : { 'talk_user' : talkUserHeader } }
    )
};
