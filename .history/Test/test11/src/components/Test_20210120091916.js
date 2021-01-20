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
        let nam = event.target.value;
        let val = event.target.value;
        this.setState({
            username : nam,
            age : val
        });
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