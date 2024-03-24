import { createHashRouter } from 'react-router-dom'
import Root from './Root'
import ErrorPage from '../pages/Error/ErrorPage'
import Home from '../pages/Home/Home'
import Game from '../pages/Game/Game'

const Router = createHashRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      { path: '/game/:mode', element: <Game /> },
    ],
  },
])

export default Router
