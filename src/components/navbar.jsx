import { NavLink } from "react-router"

function Navbar() {
  return (
    <nav className="border-b border-gray-200 bg-white px-6 py-3 flex items-center gap-6">
      <span className="font-medium text-gray-800 text-sm">MyApp</span>
      <div className="flex gap-4">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-sm ${isActive ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-700"}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-sm ${isActive ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-700"}`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-sm ${isActive ? "text-gray-900 font-medium" : "text-gray-500 hover:text-gray-700"}`
          }
        >
          Contact
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar