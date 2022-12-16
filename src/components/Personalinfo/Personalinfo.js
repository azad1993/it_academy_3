import React, { Component } from 'react';
import '../Personalinfo/Personalinfo.css'

export default class Personalinfo extends Component {
    render(){
        return(
            <div className='hakuna'>
               {this.props.personal}
            </div>
        )

    }

}