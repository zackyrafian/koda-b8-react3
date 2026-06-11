import { Link } from "react-router"

export default function HomePage() {
  return (
    <div>
      <div>
        <Link to={'/'}>Home</Link>
        <Link to={'/contact'}>Contact</Link>
        <Link to={'/about'}>About</Link>
      </div>
    </div>
  )
}
