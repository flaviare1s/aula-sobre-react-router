import { Outlet, Link } from "react-router-dom"
import './Layout.css'

export const Layout = () => {
  return (
    <>
      <nav className="menu">
        <ul>
          <li>
            <Link className="links" to="/">Home</Link>
          </li>
          <li>
            <Link className="links" to="/about">About</Link>
          </li>
          <li>
            <Link className="links" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};




