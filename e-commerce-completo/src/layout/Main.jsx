import React from 'react'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <div>
      <nav>Nav bar</nav>
      <Outlet />
      <footer>footer</footer>
    </div>
  )
}

export default Main
