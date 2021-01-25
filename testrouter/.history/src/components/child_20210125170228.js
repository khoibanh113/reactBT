import { render } from '@testing-library/react';
import React from 'react';

class child extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>{this.props.match.id}</h1>
        )
    }
}

export default child;
