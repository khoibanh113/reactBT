import { render } from '@testing-library/react';
import React from 'react';

class child extends React.Component {
    render(){
        return(
            <h1>{this.props.match}</h1>
            <h2>21</h2>
        )
    }
}

export default child;
