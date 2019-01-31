import React, {Component} from 'react';
import './body.css';

class Body extends Component{
    render(){
        const sabores = [{
            nombre: "Dulce de leche",
            imagen: require("./dulce-de-leche.jpg")
        },
        {
            nombre: "Chocolate Paris",
            imagen: require("./chocolate-paris.jpg")
        }];
        var saboresMostrar = sabores.map((i) => (
            <section>
                <span>{i.nombre}</span>
                <img src={i.imagen} />
            </section>                
        ));
        return(
            <section className="body-container">
                {saboresMostrar}
            </section>
        );
    }
}

export default Body;