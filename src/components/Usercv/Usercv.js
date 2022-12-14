import React, { Component } from 'react';
import Personalinfo from '../Personalinfo/Personalinfo';
import Experience from '../Experience/Experience';
import Contacts from '../Contacts/Contacts';
export default function Usercv () {
return(
    <div>
        <Personalinfo />
        <Experience />
        <Contacts />
    </div>
)
}