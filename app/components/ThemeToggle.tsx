import { Moon, Sun } from "lucide-react";

type ThemeToggleProps = {
  darkMode: boolean;
  toggle: () => void;
};

export default function ThemeToggle({ darkMode, toggle }: ThemeToggleProps) {
  return (
    <button
      onClick={toggle}
      className={`absolute top-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
        darkMode ? "bg-[#161D31] text-[#FFD54F]" : "bg-[#1b1b1b] text-white"
      }`}
    >
      {darkMode ? <Sun size={24} /> : <Moon size={24} />}
    </button>
  );
}
