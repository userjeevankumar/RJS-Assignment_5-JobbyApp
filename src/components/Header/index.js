/* import {Link, withRouter} from 'react-router-dom' */
import {Link, withRouter} from 'react-router-dom'
import {ImHome} from 'react-icons/im'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <nav className="navbar-container">
      <div className="nav-content">
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="nav-bar-website-logo"
          />
        </Link>
        <ul className="nav-menu-container">
          <li className="nav-bar-text-container">
            <ImHome className="nav-bar-home-icon" to="/" />
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>

          <li className="nav-bar-text-container">
            <Link to="/jobs" className="nav-link">
              Jobs
            </Link>
          </li>
        </ul>
        <FiLogOut className="nav-bar-home-icon" onClick={onClickLogout} />
        <button
          onClick={onClickLogout}
          className="logout-desktop-btn"
          type="button"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}

export default withRouter(Header)
