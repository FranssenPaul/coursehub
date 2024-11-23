export const getBasePath = (): string => {
  const base = import.meta.env.VITE_BASE_URL || '/';
  return base.endsWith('/') ? base : `${base}/`;
};
