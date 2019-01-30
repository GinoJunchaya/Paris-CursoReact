import React, {Component} from 'react';
import './footer.css'

import {
    Glyphicon,
    Button
} from 'react-bootstrap';

class Footer extends Component{
    render(){
        return(
            <section className="footer-container">
                <section className="col-md-6">
                    <p><h3>Casa Central</h3></p>
                    <p>
                        <h4>
                            <Glyphicon glyph="glyphicon glyphicon-map-marker"/>&nbsp;&nbsp;
                            <span>Ntra. Sra. de la Asunción 1669 Asunción - Paraguay</span>
                        </h4>
                    </p>
                    <p>
                        <h4>
                            <Glyphicon glyph="glyphicon glyphicon-earphone"/>&nbsp;&nbsp;                           
                            <span>+595 21 2382222</span>
                        </h4>
                    </p>
                    <Button className="btn-transparente">
                        <Glyphicon glyph="glyphicon glyphicon-briefcase"/>&nbsp;&nbsp;
                        <span>Trabajá con nosotros</span>
                    </Button>
                </section>
                <section className="col-md-3">

                </section>
                <section className="col-md-3">                            
                </section>                                
            </section>
        );
    }
}

export default Footer;