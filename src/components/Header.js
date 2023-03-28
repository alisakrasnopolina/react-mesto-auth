import React from 'react';
import logo from '../images/logo_header.svg';
import { Link, useNavigate } from  'react-router-dom'; 

function Header(props) {
  const navigate = useNavigate();

  function signOut(){
    localStorage.removeItem('token');
    props.handleSignOut()
    navigate("/sign-in", {replace: true});
  }

  return (
    <header className="header">
      <img src={logo} alt="Логотип" className="header__logo"/>
      {props.loggedIn ? 
      <div className='header__menu'>
        <h2 className="header__email">{props.userData}</h2>
        <button onClick={signOut} className="header__link header__button hover">Выйти</button>
      </div> : 
      <Link to={props.path} className="header__link hover">
        {props.title}
      </Link>}
    </header>
  );
}

export default Header;