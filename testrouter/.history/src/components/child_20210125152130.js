import React from 'react';

export default class  extends React.Component{
    render(){
        return(
            <h3>ID: {this.props.match.params.id}</h3>
        )
    }
}
