import React from 'react'

class Test extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            username : '',
            age : null
        };
    }

    myChangeHandle = (event) => {
        console.log(event.target.name);
        debugger;
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]:val});
    }

    render(){
        return(
            <form>
                <h1>Hello {this.state.username} {this.state.age}</h1>
                <p>Enter name:</p>
                <input 
                    type="text"
                    name = "username"
                    onChange={this.myChangeHandle}
                ></input>
                <p>Enter age:</p>
                <input
                    type="text"
                    name="age"
                    onChange={this.myChangeHandle}
                ></input>
            </form>
        )
    }
    

}

export default Test;