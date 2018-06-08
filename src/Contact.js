import React, { Component } from "react";

class Contact extends Component{
    constructor(props){
        super(props);
        console.log(this.props);
    }
    render(){
        return(
            <div>Contact us on { this.props.number } and you can email us at :- { this.props.email }</div>
        );
    }
}

export default Contact;