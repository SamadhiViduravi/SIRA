import { useState, useEffect } from 'react';

/**
 * Custom React hook for persistent state using localStorage
 * Syncs state across browser tabs and persists across page refreshes
 * @param {string} key - localStorage key
 * @param {any} initialValue - default value if key doesn't exist
 * @returns {[any, Function]} - [state, setState]
 */
export function useLocalStorageState(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : initialValue;
    } catch (error) {
      console.error(`Error reading from localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (error) {
      console.error(`Error writing to localStorage key "${key}":`, error);
    }
  }, [key, state]);

  return [state, setState];
}
