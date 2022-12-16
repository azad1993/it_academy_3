import React, { Component } from 'react';


export default class Name extends Component {
    render(){
        return(
            <div className='experience'>
                {this.props.name}
            </div>
        )

    }

}