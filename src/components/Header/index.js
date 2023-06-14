/* import {Link, withRouter} from 'react-router-dom' */
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
      <ul className="header-container">
        <li className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="header-logo"
          />
        </li>
        <li className="home-job-container">
          <ImHome className="home-icon" to="/" />
          <h1 className="nav-text">Home</h1>
          <h1 className="nav-text">Jobs</h1>
        </li>
        <li>
          <FiLogOut className="home-icon" onClick={onClickLogout} />
          <button onClick={onClickLogout} className="logout-btn" type="button">
            Logout
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Header
