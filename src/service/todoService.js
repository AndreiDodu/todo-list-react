export const getAll = (jwt) => {
  const uri = 'http://localhost:3001/todo';
  return fetch(uri, {
    method: 'GET',
    headers: {
      'x-auth-token': jwt,
    },
  }).then((res) => res.json());
};

export const get = (jwt, id) => {
  const uri = `http://localhost:3001/todo/${id}`;
  return fetch(uri, {
    method: 'GET',
    headers: {
      'x-auth-token': jwt,
    },
  }).then((res) => res.json());
};

export const save = (jwt, data) => {
  const uri = 'http://localhost:3001/todo';
  return fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': jwt,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const update = (jwt, id, data) => {
  const uri = `http://localhost:3001/todo/${id}`;
  return fetch(uri, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      'x-auth-token': jwt,
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const deleteItem = (jwt, id) => {
  const uri = `http://localhost:3001/todo/${id}`;
  return fetch(uri, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      'x-auth-token': jwt,
    },
  }).then((res) => res.json());
};
