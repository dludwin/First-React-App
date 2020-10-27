import React, {Component} from 'react'

class HelloWorld extends Component{         // Class base syntax. 
    render(){                               // Should return render function when we return JSX
        return (
            <h1> Hello {this.props.name} </h1>      //             
        )
    }
}

export default HelloWorld
