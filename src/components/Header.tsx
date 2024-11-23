import React from 'react';
import { useThemeStore } from '../store/themeStore';
import { AVAILABLE_THEMES, Theme } from '../constants/themes';

const Header: React.FC = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <header className="p-4 bg-base-200">
      <h1 className="text-2xl font-bold">CourseHubX</h1>
      <div className="flex items-center gap-4 mt-4">
        <label htmlFor="theme-select" className="label-text">
          Theme:
        </label>
        <select
          id="theme-select"
          value={theme}
          onChange={e => setTheme(e.target.value as Theme)} // Enforce Theme type
          className="select select-bordered"
        >
          {AVAILABLE_THEMES.map(t => (
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
