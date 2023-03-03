const BASE_URL = 'https://api.github.com/users/';

export async function getUser(url) {
  const method = 'GET';
  const options = { method }

  options.headers = {
    'Content-Type': 'application/json; charset=UTF-8',
  };

  const response = await fetch(`${BASE_URL}${url}`, options);

  if (!response.ok) {
    return false;
  }

  const result = await response.json(response);

  return true;
}
