import React from 'react'

class post extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>{match.params.id}</h1>
        )
    }
}

export default post;