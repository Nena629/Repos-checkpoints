import React from 'react';
import Fullname from './Fullname';
import Profession from './Profession';
import Bio from './Bio';

const Profil =  ({profession,bio,...others}) => {

  return (

    <>
     
     <Fullname {...others}/>
     <Bio bi={bio}/>
     <Profession job = {profession}/>

    </>
 
  )
}

export default Profil;