import reactLogo from '../assets/react.svg'
import { modules } from '../modules'

interface HeaderProps {
  selectedModule: string
  onModuleChange: (moduleId: string) => void
}

function Header({ selectedModule, onModuleChange }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__brand">
        <img src={reactLogo} className="header__logo" alt="React logo" />
        <span>React Global Program - Hometask</span>
      </div>
      <select
        className="header__select"
        value={selectedModule}
        onChange={(event) => onModuleChange(event.target.value)}
      >
        <option value="" disabled>
          Select module
        </option>
        {modules.map((module) => (
          <option key={module.id} value={module.id}>
            {module.label}
          </option>
        ))}
      </select>
    </header>
  )
}

export default Header
