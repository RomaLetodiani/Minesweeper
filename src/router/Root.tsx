import { Outlet } from 'react-router-dom'
import Header from '../Layout/Header'

const Root = () => {
  return (
    <div className="min-h-screen min-w-[375px] flex flex-col">
      <Header />
      <Outlet />
    </div>
  )
}

export default Root
