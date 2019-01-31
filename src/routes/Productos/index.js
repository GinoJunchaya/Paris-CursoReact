import React, {Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Body from './Body';

class Productos extends Component{

    componentWillMount(){
        document.title = "Paris | Productos";        
    }

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

export default Productos;