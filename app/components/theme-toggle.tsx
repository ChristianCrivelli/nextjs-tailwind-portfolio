'use client';

import { useEffect, useState } from 'react';

/**
 * Manual light/dark toggle. The site defaults to light mode regardless of
 * the visitor's OS preference (see issue #26); this button lets them opt
 * into dark mode, and the choice is remembered via localStorage.
 *
 * The initial class on <html> is set synchronously by an inline script in
 * layout.tsx (before hydration) to avoid a flash of the wrong theme; this
 * component just reads that same state back on mount so its label matches.
 */
export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
    setMounted(true);
  }, []);

  function toggleTheme() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      window.localStorage.setItem('theme', next ? 'dark' : 'light');
    } catch {
      // localStorage unavailable (private mode, etc.) — theme just won't persist.
    }
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={mounted ? `Switch to ${isDark ? 'light' : 'dark'} mode` : 'Toggle color theme'}
      className="theme-toggle"
    >
      {/* Keyed so React remounts the span on every flip, re-triggering the
          fade-in animation instead of the icon/label just popping instantly
          — see the width fix in global.css .theme-toggle for the other half
          of this (issue #30 follow-up: toggle still read as clanky). */}
      <span aria-hidden="true" key={mounted && isDark ? 'sun' : 'moon'} className="theme-toggle-fade">
        {mounted && isDark ? '☀️' : '🌙'}
      </span>
      <span key={mounted && isDark ? 'light' : 'dark'} className="theme-toggle-fade">
        {mounted && isDark ? 'Light' : 'Dark'}
      </span>
    </button>
  );
}
