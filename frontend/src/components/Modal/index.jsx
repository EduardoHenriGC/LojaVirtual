import React, { useState,useEffect } from "react";
import { Container } from "./styles";

import {AiFillCloseCircle} from "react-icons/ai"







const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);

    function FecharModal(){

setIsOpen(false)


    }


    useEffect(() => {
        setIsOpen(false);
        setTimeout(() => {
            setIsOpen(true);
        }, 5000);
      }, []);



  return (
    <Container>
      {/* Button to trigger the modal */}
      
      {isOpen && (
        
        <div className="lds-hourglass">
          {/* Modal content */}
          <img src="https://s2.glbimg.com/DDEUibrhrSRDeHhIlILMWOlCD4o=/0x0:695x395/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/n/X/4BYN5FQqeVCs5rAVNMAw/2016-10-21-nintendo-switch-novo-console-nintendo.jpg" alt="" />
          <button className="btn" onClick={FecharModal}><AiFillCloseCircle/></button>
        </div>
        
      )}
    </Container>
  );
};

export default Modal;