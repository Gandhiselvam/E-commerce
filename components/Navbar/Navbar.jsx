import React, { useContext, useState } from 'react'
import './Navbar.css'


import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

export const Navbar = () => {
  const [menu,setMenu]=useState("shop");
  const {getTotalCartItem}=useContext(ShopContext);



  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>SHOPPER</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => {setMenu("shop")}}><Link style={{textDecoration:'none'}} to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("Men")}}><Link style={{textDecoration:'none'}} to="/Men">Men</Link>{menu === "Men" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("Women")}}><Link style={{textDecoration:'none'}} to='/Women'>Women</Link>{menu === "Women" ? <hr /> : <></>}</li>
        <li onClick={() => {setMenu("Kids")}}><Link style={{textDecoration:'none'}} to='/Kids'>kids</Link>{menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
      <div className="nav-login-card">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="" /></Link>
        <div className="nav-card-count">{getTotalCartItem()}</div>
      </div>
    </div>
  );
}
export default Navbar;