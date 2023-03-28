import React from 'react';

export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then((response) => {
    try {
      if (response.status === 201){
        return response.json();
      }
    } catch(evt){
      return (evt)
    }
  })
  .then((res) => {
    return res;
  })
  .catch((err) => console.log(err));
};  

export const authorization = (email, password) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email: email,
      password: password
    })
  })
  .then(res => res.json())
  .then((data) => {
    localStorage.setItem('token', data.token);
    return data;
  })
  .catch((err) => console.log(err));
}; 

export const getContent = (token) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
  .then(res => res.json())
  .then(data => data)
}