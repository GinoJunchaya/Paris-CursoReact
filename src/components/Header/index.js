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
                    <Button className="button_menu" href="/productos">Productos</Button>
                    <Button className="button_menu" href="/sabores">Sabores</Button>
                    <Button className="button_menu" href="/locales">Locales</Button>                    
                </section>
            </section>
        );
    }

    handleRouteProductos(e){
        e.preventDefault();
        this.props.history.push("/productos");        
    }
}

export default Header;