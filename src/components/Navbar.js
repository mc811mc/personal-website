import React, { useState, useEffect } from 'react';
import { Button } from './Button'
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    return () => {
      showButton();
    };
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Minho Cho
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to ='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to ='/programming' className='nav-links' onClick={closeMobileMenu}>
                Programming
              </Link>
            </li>
            <li className='nav-item'>
              <Link to ='/travel' className='nav-links' onClick={closeMobileMenu}>
                Travel
              </Link>
            </li>
            <li className='nav-item'>
              <Link to ='/translation' className='nav-links' onClick={closeMobileMenu}>
                Translation
              </Link>
            </li>
            <li>
              <Link to ='/download' className='nav-links-mobile' onClick={closeMobileMenu}>
                Download
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>Download</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar