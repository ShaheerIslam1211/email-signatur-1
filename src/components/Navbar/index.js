import React, { useEffect, useState } from 'react';
import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import './navbar.scss';

function Navbar({ user }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        console.log('Sign out successful');
        navigate('/SignIn'); // Redirect to the sign-in page upon successful sign-out
      })
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };

  return (
    <header className='header'>
      <div className='header__content'>
        <span className='header__content__logo'>
          <img
            src={process.env.PUBLIC_URL + '/assets/logo.png'}
            alt='Wise Stamp Logo'
          />
        </span>
        <nav
          className={`header__content__nav ${
            menuOpen && size.width < 768 ? 'isMenu' : ''
          }`}
        >
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/create'>Create</Link>
            </li>
            <li>
              <Link to='/Learn'>Learn</Link>
            </li>
            <li>
              <Link to='/Company'>Company</Link>
            </li>
            <li>
              {user ? (
                <button
                  className='btn'
                  onClick={signOut}
                >
                  Sign Out
                </button>
              ) : (
                <Link to='/SignIn'>
                  <button className='btn'>Sign In</button>
                </Link>
              )}
            </li>
            <li>
              <button className=' btn__language btn'> English </button>
            </li>
          </ul>
        </nav>
        <div className='header__content__toggle'>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
