import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from "remix";
import type { MetaFunction } from "remix";
import { useContext, useLayoutEffect, useState } from "react";
import { StylesContext, ThemeContext } from "./styles.context";

export const meta: MetaFunction = () => {
  return { title: "New Remix App" };
};

export default function App() {
  const styles = useContext(StylesContext);
  const [theme, setTheme] = useState('light')

  function handleTheme(selectedTheme: string) {
    if (typeof window !== "undefined") {
      setTheme(selectedTheme)
      localStorage.setItem('theme', selectedTheme)
    }
  }

  useLayoutEffect(() => {

    if (typeof window !== "undefined") {

      const currentTheme = localStorage.getItem('theme')
      handleTheme(currentTheme || 'light')
    }

  }, [])

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
        {styles}
      </head>
      <body>
        <ThemeContext.Provider value={{ theme, setTheme: handleTheme }}>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
        </ThemeContext.Provider>
        {process.env.NODE_ENV === "development" && <LiveReload />}
      </body>
    </html>
  );
}
