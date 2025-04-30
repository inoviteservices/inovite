import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <header id="bringer-header" className="is-frosted is-sticky" data-appear="fade-down" data-unload="fade-up">
      <div className="bringer-header-inner">
        {/* Header Logo */}
        <div className="bringer-header-lp">
          <NavLink to="/" className="bringer-logo">
            <img src="/assets/img/inovite-logo-web.png" alt="inovite" width="88" height="24" />
          </NavLink>
        </div>

        {/* Main Menu */}
        <div className="bringer-header-mp">
          <nav className="bringer-nav">
            <ul className="main-menu" data-stagger-appear="fade-down" data-stagger-delay="75">
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About Us</NavLink>
              </li>
              
              <li className="menu-item-has-children">
                <NavLink to="#" className="has-submenu">Resources</NavLink>
                <ul className="sub-menu">
                  <li>
                    <NavLink to="/services" className={({ isActive }) => isActive ? 'active' : ''}>Services</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blogs" className={({ isActive }) => isActive ? 'active' : ''}>Blogs</NavLink>
                  </li>
                  <li>
                    <NavLink to="/faq" className={({ isActive }) => isActive ? 'active' : ''}>FAQs</NavLink>
                  </li>
                  {/* <li>
                    <NavLink to="/guide" className={({ isActive }) => isActive ? 'active' : ''}>Tutorials & Guides</NavLink>
                  </li> */}
                 
                  {/* <li>
                    <NavLink to="/events" className={({ isActive }) => isActive ? 'active' : ''}>Events</NavLink>
                  </li> */}
                </ul>
              </li>
              {/* <li>
                <NavLink to="/career" className={({ isActive }) => isActive ? 'active' : ''}>Career</NavLink>
              </li> */}
              
              <li>
                <NavLink to="/career" className={({ isActive }) => isActive ? 'active' : ''}>Career</NavLink>
              </li>
              <li>
                <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        {/* Header Button */}
        <div className="bringer-header-rp">
          <NavLink to="/contact" className="bringer-button">Get a FREE Quote</NavLink>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="bringer-mobile-header-inner">
        <NavLink to="/" className="bringer-logo">
          <img src="src\assets\img\inovite-logo-web.png" alt="bringer." width="88" height="24" />
        </NavLink>
        <a href="#" className="bringer-mobile-menu-toggler">
          <i className="bringer-menu-toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </i>
        </a>
      </div>
    </header>
  );
};

export default Navbar;
