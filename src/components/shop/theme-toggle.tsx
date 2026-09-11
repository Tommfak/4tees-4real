import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const LIGHT = "#f4f1ea";
const DARK = "#0c0c0b";

export function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", dark ? DARK : LIGHT);
}

export function ThemeToggle({ className }: { className?: string }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  return (
    <button
      type="button"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      className={
        className ??
        "grid size-11 place-items-center text-muted transition-colors duration-150 [touch-action:manipulation] active:opacity-70"
      }
      onClick={() => {
        const next = !document.documentElement.classList.contains("dark");
        try {
          localStorage.setItem("4tees-theme", next ? "dark" : "light");
        } catch {
          /* ignore */
        }
        applyTheme(next);
        setDark(next);
      }}
    >
      {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
    </button>
  );
}
