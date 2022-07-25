import { StringMappingType } from 'typescript';

function request(url: string, option?: RequestInit) {
  return fetch(url, option);
}

export function getRequest(url: string, option?: RequestInit) {
  return request(url, {
    ...option,
    method: 'GET',
  });
}

export function getJson(url: string, option?: RequestInit) {
  return getRequest(url, option).then(res => res.json());
}

export function getHtml(
  url: string,
  mimeType:
    | 'text/html'
    | 'text/xml'
    | 'application/xml'
    | 'application/xhtml+xml'
    | 'image/svg+xml' = 'text/html',
  option?: RequestInit,
): Promise<HTMLElement | Document> {
  const parser = new DOMParser();
  return getRequest(url, option)
    .then(res => res.text())
    .then(text => parser.parseFromString(text, mimeType));
}

export function postRequest(url: string, option?: RequestInit) {
  return request(url, {
    ...option,
    method: 'POST',
  });
}

export function patchRequest(url: string, option?: RequestInit) {
  return request(url, {
    ...option,
    method: 'PATCH',
  });
}

export function deleteRequest(url: string, option?: RequestInit) {
  return request(url, {
    ...option,
    method: 'DELETE',
  });
}

export function putReqeust(url: string, option?: RequestInit) {
  return request(url, {
    ...option,
    method: 'PUT',
  });
}
