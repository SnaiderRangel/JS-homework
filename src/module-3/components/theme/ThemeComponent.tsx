import { useTheme, type Theme } from './ThemeContext'
import ThemeProvider from './ThemeProvider'
import ThemeToggler from './ThemeToggler'

const themeColors: Record<Theme, { color: string; backgroundColor: string }> = {
  light: { color: '#141414', backgroundColor: '#ECECEC' },
  dark: { color: '#ECECEC', backgroundColor: '#141414' },
}

function ThemedContent() {
  const { theme } = useTheme()

  return (
    <div className="theme-box" style={themeColors[theme]}>
      <h3>Current theme: {theme}</h3>
      <ThemeToggler />
    </div>
  )
}

function ThemeComponent() {
  return (
    <ThemeProvider>
      <ThemedContent />
    </ThemeProvider>
  )
}

export default ThemeComponent
