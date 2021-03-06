import { baseUrl } from '../config';

export const getToken = async (email, password) => {
  const response = await fetch(`${baseUrl}/session`, {
    method: 'put',
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify({ email, password }),
  });

  if(response.ok) {
    const {token} = await response.json();
    window.localStorage.setItem('token', token)
    return token;
  }
}

export const createUser = async (body) => {

  const response = await fetch(`${baseUrl}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  })


  if(response.ok) {
    const {token} = await response.json();
    window.localStorage.setItem('token', token)
    return token;
  } else {
    return;
  }
}
