import { useTheme } from './ThemeContext'

function ThemeToggler() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button type="button" onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} theme
    </button>
  )
}

export default ThemeToggler
