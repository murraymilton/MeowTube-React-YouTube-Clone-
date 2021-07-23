import React, {Component} from 'react';
import {MenuItems} from "./menuItems"
import './navBar.css'

class Navbar extends Component{
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">MeowTube<i class="fab fa-youtube"></i></h1>
                <div className="menu-icon"></div>
                <ul>
                    {MenuItems.map((item, index)  =>{
                        return(
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                {item.title}
                                </a>
                            </li> 
                        )
                    })}
                </ul>
            </nav>
        )
    }
}
export default Navbar;

<i class="fab fa-youtube"></i>