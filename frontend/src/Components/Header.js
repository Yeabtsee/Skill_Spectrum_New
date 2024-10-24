import React, {useEffect, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../Assets/css/style.css'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const navigateToSection = () => {
    if (window.location.pathname === '/'||window.location.pathname === '/about'||window.location.pathname === '/courses') {
      const section = document.querySelector('#register');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling on the same page
      }
    } else {
      window.location.assign('/#register');
    }
  };  
  useEffect(() => {
    if (window.location.hash) {
      const section = document.querySelector(window.location.hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [])
  

  return (
   
    <div className="container-fluid">
      <div className="row border-top px-xl-5" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2>Skill Spectrum</h2>
        <div className="col-lg-9">
          <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
            <button type="button" className="navbar-toggler" onClick={toggleNavbar}>
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse justify-content-between ${isOpen ? 'show' : ''}`} id="navbarCollapse">
            <div className="navbar-nav py-0">
                <NavLink 
                  to="/" 
                  className="nav-item nav-link" 
                  style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  className="nav-item nav-link" 
                  style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}
                >
                  About
                </NavLink>
                <NavLink 
                  to="/courses" 
                  className="nav-item nav-link" 
                  style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}
                >
                  Courses
                </NavLink>
                <NavLink 
                  to="/teachers" 
                  className="nav-item nav-link" 
                  style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}
                >
                  Teachers
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className="nav-item nav-link" 
                  style={({ isActive }) => ({ color: isActive ? 'orange' : 'black' })}
                >
                  Contact
                </NavLink>
              </div>

              {/* <HashLink smooth to='#register' className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block">Join Now</HashLink> */}
              <button className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" onClick={navigateToSection}>
                Join Now
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
