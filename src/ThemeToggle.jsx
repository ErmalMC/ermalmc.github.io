import { useTheme } from "./ThemeContext.jsx";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-gray-200 dark:bg-gray-600 transition-all duration-300"
        >
            {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
    );
};

export default ThemeToggle;
