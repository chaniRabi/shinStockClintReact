import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';
import '../css/header.css'


const Header = () => {
  return (
    <div className='header my-2'>
      <nav>

        {/* <Link to="/"> שיינ'ס סטוק </Link> */}

        <Link to="/signIn">התחברות</Link>
        /
        <Link to="/signUp">הרשמה</Link>

        <Link to="/cart">
          <ShoppingCart size={50} />
        </Link>

      </nav>
    </div>
  );

};

export default Header;


