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
                <section className="header-img" onClick={this.handleHome.bind(this)}>
                    <img src={logo} className="header-logo-img" alt=""/>
                </section>
                <section className="header-menu">
                    <Button className="button_menu" onClick={this.handleProductos.bind(this)}>Productos</Button>
                    <Button className="button_menu" onClick={this.handleSabores.bind(this)}>Sabores</Button>
                    <Button className="button_menu" onClick={this.handleLocales.bind(this)}>Locales</Button>
                </section>
            </section>
        );
    }

    handleProductos(e){
        e.preventDefault();
        this.props.history.push("/productos");
    }

    handleSabores(e){
        e.preventDefault();
        this.props.history.push("/sabores");
    }

    handleLocales(e){
        e.preventDefault();
        this.props.history.push("/locales");        
    }

    handleHome(e){
        e.preventDefault();
        this.props.history.push("/");        
    }
}

export default Header;