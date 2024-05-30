import React from "react";
import "./Img1.css";


export function Img1(props) {
  return (
    <>
      <div className="image">
        <img src={props.i} alt="" className="img" />
      </div>
    </>
  );
}
