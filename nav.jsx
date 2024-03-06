import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import { Button, Container, Navbar, Modal } from 'react-bootstrap';


const Nav = () => {
  return (
      // <div style={{display:'flex', justifyContent:'space-between', margin:'10px'}}>
        <nav style={{display:'flex', justifyContent:'space-between', margin:'10px'}}>
          <Link to="/">דף הבית</Link>
          <Link to="/signIn">התחברות</Link>
          <Link to="/signUp">הרשמה</Link>
          <Link to="/products">המוצרים שלנו</Link>
          <Link to="/cart">עגלת קניות</Link>
          <Link to="/contact">צור קשר</Link>
        </nav>
      // </div>
  );

};

export default Nav;


