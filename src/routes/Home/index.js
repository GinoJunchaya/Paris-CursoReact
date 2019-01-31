import React, {Component} from 'react';
import './body.css';
import {Carousel} from 'react-bootstrap';

class Home extends Component{
    render(){
        var carouselOne = require("./header-01.jpg");
        var carouselTwo = require("./header-02.jpg");
        var carouselThree = require("./header-03.jpg");
        return(
            <section className="body-container">
                <Carousel>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselOne}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselTwo}/>                        
                    </Carousel.Item>
                    <Carousel.Item>
                        <img className="d-block w-100" src={carouselThree}/>
                    </Carousel.Item>                    
                 </Carousel>
            </section>
        );
    }
}

export default Home;