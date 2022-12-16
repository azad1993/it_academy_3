import React, { Component } from 'react';

export default class Email extends Component {
    render(){
        return(
            <div className='contacts'>
                {this.props.email}
            </div>
        )
    }

}