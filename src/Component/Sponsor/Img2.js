import React from 'react';
import "./Img2.css";


export function Img2(props) {
    return (
        <>
        

        <div className='box'>
            <img src={props.i} alt='' className='img'/>
            
            <p className='b-p'>{props.h} <br/><span>{props.p}</span></p>

            <button className='btn'>View animals</button>
        </div>
        

        
            
        </>
    );
}

