import { render } from '@testing-library/react';
import React from 'react';

class child extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        const collectionId = this.props.match && this.props.match.params && this.props.match.params.id;
        return(
            <h1>{collectionId}</h1>
        )
    }
}

export default child;
