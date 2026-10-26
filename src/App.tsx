import { Suspense, useState } from 'react'
import Header from './components/Header'
import { modules } from './modules'

const STORAGE_KEY = 'selectedModule'

function getSavedModule() {
  try {
    return localStorage.getItem(STORAGE_KEY) ?? ''
  } catch {
    return ''
  }
}

function App() {
  const [selectedModule, setSelectedModule] = useState(getSavedModule)

  const handleModuleChange = (moduleId: string) => {
    setSelectedModule(moduleId)
    try {
      localStorage.setItem(STORAGE_KEY, moduleId)
    } catch {
      // ignore, the selection just won't be remembered
    }
  }

  const activeModule = modules.find((module) => module.id === selectedModule)

  return (
    <>
      <Header selectedModule={activeModule ? selectedModule : ''} onModuleChange={handleModuleChange} />
      <main className="app">
        {activeModule ? (
          <>
            <h1 className="app__title">You are working on {activeModule.label}.</h1>
            <Suspense fallback={<p>Loading...</p>}>
              <activeModule.Component />
            </Suspense>
          </>
        ) : (
          <h2 className="app__placeholder">Please select Module in top-right corner</h2>
        )}
      </main>
    </>
  )
}

export default App
