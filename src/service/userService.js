export const register = (data) => {
  const uri = 'http://localhost:3001/user';
  return fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const loginUser = (data) => {
  const uri = 'http://localhost:3001/user/login';
  return fetch(uri, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
};

export const me = (jwt) => {
  const uri = `http://localhost:3001/user/me`;
  return fetch(uri, {
    method: 'GET',
    headers: {
      'x-auth-token': jwt,
    },
  }).then((res) => res.json());
};
