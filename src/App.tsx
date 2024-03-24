import { RouterProvider } from 'react-router-dom'
import Router from './router/Router'
import { GameProvider } from './Contexts/GameContext'

const App = () => {
  return (
    <GameProvider>
      <RouterProvider router={Router} />
    </GameProvider>
  )
}

export default App
