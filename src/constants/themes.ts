export const AVAILABLE_THEMES = [
  'bumblebee',
  'coffee',
  'forest',
  'cupcake',
  'business',
] as const;

export type Theme = (typeof AVAILABLE_THEMES)[number];

export const DEFAULT_THEME: Theme = 'bumblebee';

export const LOCAL_STORAGE_THEME_KEY = 'theme';
