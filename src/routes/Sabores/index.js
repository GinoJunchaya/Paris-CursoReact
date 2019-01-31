import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Body from './Body';

class Sabores extends Component{
    render(){
        return(
            <section>
                <Header history={this.props.history}/>
                <Body />
                <Footer />
            </section>
        );
    }
}

export default Sabores;