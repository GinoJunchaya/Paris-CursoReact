import React, {Component} from 'react';
import {Card} from 'react-bootstrap';
import "./sabor.css";

class Sabor extends Component{
    render(){
        return(
            <section className="col-md-2">
                <Card className="card-sabor">
                    <Card.Img variant="top" src={this.props.imagen}/>
                    <Card.Footer className="card-footer">{this.props.nombre}</Card.Footer>
                </Card>
            </section>                
        );
    }
}

export default Sabor;