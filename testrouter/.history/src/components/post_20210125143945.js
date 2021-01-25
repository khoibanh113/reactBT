import React from 'react'

class child extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <h1>{match.params.id}</h1>
        )
    }
}

export default child;