import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";



const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleNavbar = () => setToggleMenu(!toggleMenu);

  return (
    <nav className='navbar' id = "navbar">
      <div className='container navbar-content flex'>
        <div className='brand-and-toggler flex flex-sb'>
          <Link to = "/" className='navbar-brand flex'>
            <span className='text-uppercase fw-7 fs-24 ls-1'>Bookworm</span>
          </Link>
          <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "book" >Home</Link>
            </li>
            <li className='nav-item'>
              <Link to = "about" >About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar