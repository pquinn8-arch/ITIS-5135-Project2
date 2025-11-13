import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    // Load saved theme from browser or default to light
    return localStorage.getItem("theme") || "light";
  });

  // Save theme & apply it to body
  useEffect(() => {
    localStorage.setItem("theme", theme);

    // ✅ Apply theme to <body>
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
