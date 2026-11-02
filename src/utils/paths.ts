const rawBase = import.meta.env.BASE_URL || '/';
const base = rawBase.replace(/\/$/, '');

export function getPath(path: string): string {
  if (path === '/' || path === '') {
    return rawBase.endsWith('/') ? rawBase : `${rawBase}/`;
  }
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
