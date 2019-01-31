import React, {Component} from 'react';
import './footer.css'
import {IoMdBriefcase, IoIosCall} from 'react-icons/io';
import {FaMapMarker} from 'react-icons/fa';

import {
    Button
} from 'react-bootstrap';

class Footer extends Component{
    render(){
        return(
            <section className="footer-container">
                <section className="col-xs-12 col-sm-12 col-md-6">
                    <p><h5>Casa Central</h5></p>
                    <p>
                        <h6>
                            <FaMapMarker />&nbsp;&nbsp;
                            <span>Ntra. Sra. de la Asunción 1669 Asunción - Paraguay</span>
                        </h6>
                    </p>
                    <p>
                        <h6>
                            <IoIosCall />&nbsp;&nbsp;
                            <span>+595 21 2382222</span>
                        </h6>
                    </p>
                    <Button className="btn-transparente">
                        <IoMdBriefcase />&nbsp;&nbsp;
                        <span>Trabajá con nosotros</span>
                    </Button>
                </section>
                <section className="d-none d-sm-block col-md-3 links-container">
                    <h5>Nosotros</h5>
                    <h6>La empresa</h6>
                    <h6>Trabajá con nosotros</h6>
                    <h6>Politicas de privacidad</h6>
                </section>
                <section className="d-none d-sm-block col-md-3 links-container">
                    <h5>Servicios</h5>
                    <h6>La empresa</h6>
                    <h6>Trabajá con nosotros</h6>
                    <h6>Politicas de privacidad</h6>
                </section>
            </section>
        );
    }
}

export default Footer;