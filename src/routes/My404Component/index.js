import React, {Component} from 'react';

class My404Component extends Component{

    componentWillMount(){
        document.title = "Paris | 404";
    }

    render(){
        return(
            <section>
                <span>Page not found!</span>
            </section>
        );
    }
}

export default My404Component;