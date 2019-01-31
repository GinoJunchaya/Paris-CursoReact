import React, {Component} from 'react';
import {Carousel} from 'react-bootstrap';
import * as carouselOne from './header-01.jpg';
import * as carouselTwo from './header-02.jpg';
import * as carouselThree from './header-03.jpg';
import './body.css';

class Body extends Component{
    render(){
        return(
            <section className="body-container">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselOne} alt=""/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselTwo} alt=""/>                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselThree} alt=""/>
                    </Carousel.Item>                    
                 </Carousel>
            </section>
        );
    }
}

export default Body;