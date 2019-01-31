import React, {Component} from 'react';
import Sabor from './Sabor';
import {CardGroup} from 'react-bootstrap';
import './body.css';

class Body extends Component{
    render(){
        const sabores = this.getSabores();
        var saboresMostrar = sabores.map((i) => (
            <Sabor nombre={i.nombre} imagen={i.imagen} />
        ));
        return(
            <section className="body-container">
                <CardGroup>
                    {saboresMostrar}
                </CardGroup>                    
            </section>
        );
    }

    getSabores(){
        var sabores = [{
            nombre: "Dulce de leche",
            imagen: require("./dulce-de-leche.jpg")
        },
        {
            nombre: "Chocolate Paris",
            imagen: require("./chocolate-paris.jpg")
        },
        {
            nombre: "Almendrado",
            imagen: require("./almendrado.jpg")
        },
        {
            nombre: "Americana Paris",
            imagen: require("./americana-paris.jpg")
        },
        {
            nombre: "Banana split",
            imagen: require("./banana-split.jpg")
        },
        {
            nombre: "Cereza",
            imagen: require("./cereza.jpg")
        },
        {
            nombre: "Chocolate almendrado",
            imagen: require("./chocolate-almendrado.jpg")
        },
        {
            nombre: "Chocolate bariloche",
            imagen: require("./chocolate-bariloche.jpg")
        },
        {
            nombre: "Chocolate con microgalletitas",
            imagen: require("./chocolate-con-microgalletitas.jpg")
        },
        {
            nombre: "Chocolate suizo",
            imagen: require("./chocolate-suizo.jpg")
        },
        {
            nombre: "Chocolate",
            imagen: require("./chocolate.jpg")
        },
        {
            nombre: "Coco",
            imagen: require("./coco.jpg")
        },
        {
            nombre: "DDL c/ Brownie",
            imagen: require("./ddl-con-brownie.jpg")
        },
        {
            nombre: "DDL c/ Microgalletitas",
            imagen: require("./ddl-con-microgalletitas.jpg")
        },
        {
            nombre: "DDL granizado",
            imagen: require("./ddl-granizado.jpg")
        },
        {
            nombre: "DDL Paris",
            imagen: require("./ddl-paris.jpg")
        },
        {
            nombre: "DDL Picardía",
            imagen: require("./ddl-picardia.jpg")
        },
        {
            nombre: "Dolcatta",
            imagen: require("./dolcatta.jpg")
        },
        {
            nombre: "Dulce de leche",
            imagen: require("./dulce-de-leche.jpg")
        },
        {
            nombre: "Durazno",
            imagen: require("./durazno.jpg")
        },
        {
            nombre: "Frutilla",
            imagen: require("./frutilla.jpg")
        },
        {
            nombre: "Granizado",
            imagen: require("./granizado.jpg")
        },
        {
            nombre: "Kiwi",
            imagen: require("./kiwi.jpg")
        },
        {
            nombre: "Limón",
            imagen: require("./limon.jpg")
        },
        {
            nombre: "Mascarpone",
            imagen: require("./mascarpone.jpg")
        },
        {
            nombre: "Mburucuja",
            imagen: require("./mburucuja.jpg")
        },
        {
            nombre: "Menta",
            imagen: require("./menta.jpg")
        },
        {
            nombre: "Merengata",
            imagen: require("./merengata.jpg")
        },
        {
            nombre: "Paris",
            imagen: require("./paris.jpg")
        },
        {
            nombre: "Piña",
            imagen: require("./pinha.jpg")
        },
        {
            nombre: "Portuguesa",
            imagen: require("./portuguesa.jpg")
        },
        {
            nombre: "Tramontana",
            imagen: require("./tramontana.jpg")
        },
        {
            nombre: "Vainilla paris",
            imagen: require("./vainilla-paris.jpg")
        },
        {
            nombre: "Vainilla",
            imagen: require("./vainilla.jpg")
        }];
        return sabores;        
    }
}

export default Body;