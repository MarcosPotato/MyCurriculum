import React from 'react'
import { useState, useEffect } from 'react'

import api from '../../Services/api.js'

export default function Contacts (props) {

    const [contact, setContact] = useState({})
    
    useEffect(() => {
        api.get(`/profile/contacts/${props.idProfile}`)
            .then(response => {
                console.log(response.data[0])
                setContact(response.data[0])
            })
            .catch(err => alert(err))

    },[props.idProfile])
    
    return(
        <>
            <h1></h1>
            <h1></h1>
            <h1></h1>
        </>
    )
}