import logo from '../../assets/meet.png'
import { useUser } from '../../context/UserContext'
import './Header.css'

const Header = () => {
  const { name, color } = useUser()
  return (
    <header>
      <img src={logo} className="app-logo" alt="Alchemy Logo" />
      <p>
        Meet <span style={{ color: `${color}` }}>{name}</span>!
      </p>
    </header>
  )
}

export default Header
