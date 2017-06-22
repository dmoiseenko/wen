import url from 'url';


export function setLocation(path) {
  window.location = path;
}

export function getParsedLocationUrl() {
  return url.parse(window.location.href);
}
