import fetch from 'isomorphic-fetch';


export const HEADERS = {
  JSON: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
};

export async function apiRequest(url, options) {
  const response = await fetch(
    url,
    {
      ...options,
      credentials: 'same-origin'
    }
  );

  if (response.ok) {
    const data = await response.json();
    return { response: data };
  }

  const contentType = response.headers.get('content-type');
  if (contentType && contentType.indexOf('application/json') !== -1) {
    const json = await response.json();
    return { error: json, status: response.status };
  }

  const text = await response.text();
  return { error: text, status: response.status };
}

export function postApiRequest(url, body, options = { headers: {} }) {
  return apiRequest(url, {
    ...options,
    method: 'POST',
    headers: {
      ...options.headers,
      ...HEADERS.JSON
    },
    body: JSON.stringify(body)
  });
}
