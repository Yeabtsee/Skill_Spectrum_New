import React, {useEffect, useState } from 'react';
import { NavLink,Link } from 'react-router-dom';
import '../Assets/css/style.css';
import '../Assets/css/header.css';
import axios from 'axios';
import LogoutIcon from '@mui/icons-material/Logout';



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [userName, setUserName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem('token');

      
      if (token) {
        setIsAuthenticated(true);
        const response = await axios.get('http://localhost:5000/api/users/me', {
         
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        return response.data; 
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchUserData();
      if (user) {
        setUserName(user.username); 
      }
    };
    fetchUser();
  }, []);

  const navigateToSection = () => {
    if (window.location.pathname === '/'||window.location.pathname === '/about'||window.location.pathname === '/courses') {
      const section = document.querySelector('#register');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' }); 
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
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('token');
      setIsAuthenticated(false);
      window.location.reload();
    }
  };
  

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
              {isAuthenticated ? (
                <>
                <div className="logout-container">
                  <span className="ml-auto" style={{fontSize:"25px", fontWeight:"bold"}}>Welcome, {userName}</span>
                  <div className='logout-btn'>
                   <button onClick={handleLogout}><LogoutIcon/></button>
                   <span className="tooltip">Logout</span> 
                  </div>
                </div>
                  
                  
                </>
                
              ) : ( 
              <button className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" onClick={navigateToSection}>
                Join Now
              </button>
              )
              }
             

            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
