import React from 'react';
import {NavLink} from 'react-router-dom';
const Navbar=()=>{
    return(
<nav>
    <NavLink to='/products'>Products Index</NavLink>
    |
    <NavLink to='/'>Welcome</NavLink>
    |
    <NavLink to='/products/new'>New Product</NavLink>
</nav>)
}
export default Navbar;