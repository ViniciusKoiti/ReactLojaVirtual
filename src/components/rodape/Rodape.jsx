import React from 'react';
import { TemaContexto } from '../../App';
import './rodape.css';
import { useContext, useState } from 'react';

const Rodape = () => {
    const { dark, setDark } = useContext(TemaContexto);

    return (
        <div className={`rodape ${dark ? 'dark' : 'light'}`}> 
            2023 Crud-Spring-WebSocket
        </div>
    )
}



export default Rodape;