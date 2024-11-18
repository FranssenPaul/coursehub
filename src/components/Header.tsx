import React from 'react';
import { useThemeStore } from '../store/themeStore';

const Header: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  const themes = ['light', 'dark', 'bumblebee', 'coffee', 'forest']; // List of themes

  return (
    <header className="p-4 bg-base-200">
      <h1 className="text-2xl font-bold">Course Hub</h1>
      <div className="flex items-center gap-4 mt-2">
        <label htmlFor="theme-select" className="label-text">
          Theme:
        </label>
        <select
          id="theme-select"
          value={theme}
          onChange={e => setTheme(e.target.value)}
          className="select select-bordered"
        >
          {themes.map(t => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>
    </header>
  );
};

export default Header;
