import React, {Component} from 'react';
import './header.css';
import {
    Button
} from 'react-bootstrap';

class Header extends Component{
    render(){
        var logo = require("./logo-a.png");
        return(
            <section className="header-container">
                <section className="header-img">
                    <img src={logo} className="header-logo-img"/>
                </section>
                <section className="header-menu">
                    <Button className="button_menu">Productos</Button>
                    <Button className="button_menu">Sabores</Button>
                    <Button className="button_menu">Locales</Button>                    
                </section>
            </section>
        );
    }
}

export default Header;