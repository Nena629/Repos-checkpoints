import React from 'react'
import Image from './Image'

const Fullname =(props) => {

    return (
        <>
            <Image source = {props.image}/>
            <p>{props.name}</p>
            {props.warning()}

        </>

    )
}
 export default Fullname;
