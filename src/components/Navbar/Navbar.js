import Reach, { Component } from 'react';
import { MenuItems } from "./MenuItems";
import logo from '/Users/pedrommcarrasco/Desktop/Projects/CocoaHub.website/src/resources/logo.svg';
import './Navbar.css'

// Component inspired by https://www.youtube.com/watch?v=fL8cFqhTHwA
class Navbar extends Component {
    render () {
        return <nav className="NavbarItems">
            <h1 className="navbar-logo">
                <span className='navbar-logo-item'><img src={logo}/></span>  
                <span className='navbar-logo-item'>CocoaHub</span>       
            </h1>
            <ul className='nav-menu'>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className='nav-links' href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
    };
}

export default Navbar