import React, {Component} from 'react';
import './header.css';
import {
    Button,
    Dropdown
} from 'react-bootstrap';
import {FiMenu} from "react-icons/fi";

class Header extends Component{
    render(){
        var logo = require("./logo-a.png");
        return(
            <section className="header-container">
                <section className="header-img" onClick={this.handleHome.bind(this)}>
                    <img src={logo} className="header-logo-img" alt=""/>
                </section>
                <section className="d-none d-sm-block">
                    <section className="header-menu">
                        <Button className="button_menu" onClick={this.handleProductos.bind(this)}>Productos</Button>
                        <Button className="button_menu" onClick={this.handleSabores.bind(this)}>Sabores</Button>
                        <Button className="button_menu" onClick={this.handleLocales.bind(this)}>Locales</Button>
                    </section>                        
                </section>
                <section className="d-block d-sm-none col">
                    <section className="header-menu-dropdown">
                        <Dropdown variant="secondary" className="dropdown-menu-container">
                            <Dropdown.Toggle className="dropdown-md-menu">
                                <FiMenu />
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={this.handleProductos.bind(this)}>Productos</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleSabores.bind(this)}>Sabores</Dropdown.Item>
                                <Dropdown.Item onClick={this.handleLocales.bind(this)}>Locales</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </section>                    
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