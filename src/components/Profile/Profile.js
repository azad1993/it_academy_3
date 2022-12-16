import React, { Component } from 'react';
import Address from '../Address/Address';
import Email from '../Email/Email';
import Name from '../Name/Name';
import Personalinfo from '../Personalinfo/Personalinfo';
export default function Profile () {
return(
    <div>
        <Address data="Address"/>
        <Email email='asdgg@mail.ru'/>
        <Name name="Azad"/>
        <Personalinfo personal='private'/>
    </div>
)
}