import { getLocalStorage, setLocalStorage } from "@/libs/localstorage";
import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from "react";

export type ITheme = "light" | "dark";

export interface IUpdatehemeContext {
  theme: ITheme;
  toggleTheme(): void;
  updateTheme(theme: ITheme): void;
}

export interface IUpdateThemeProvider {
  children: ReactNode;
}

export const UpdateThemeContext = createContext<IUpdatehemeContext>(
  {} as IUpdatehemeContext
);

export const UpdateThemeProvider = ({ children }: IUpdateThemeProvider) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    return getLocalStorage("theme").theme || "light";
  });

  const updateTheme = useCallback((value: ITheme) => {
    setTheme(value);
    setLocalStorage("theme", {
      theme: value,
    });
  }, []);

  const toggleTheme = useCallback(() => {
    const newTheme = theme === "light" ? "dark" : "light";
    updateTheme(newTheme);
  }, [theme]);

  const value = useMemo(
    () => ({ theme, toggleTheme, updateTheme }),
    [theme, toggleTheme, updateTheme]
  );

  return (
    <UpdateThemeContext.Provider value={value}>
      {children}
    </UpdateThemeContext.Provider>
  );
};
