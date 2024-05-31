import React from "react";
import "./Ppara.css"

export function Ppara(props) {
  return (
    <>
      
        {/* paragraph */}
        <div className="bp-para">
          <h1 className="bp-heading ">{props.h1}</h1>
          <p className="bpp-para">{props.p1} <br/> {props.p3}</p>
        </div>
      
    </>
  );
}
