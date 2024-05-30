import React from "react";
import "./Pic.css";

export function Pic(props) {
  return (
    <>
      
        <div className="box">
          <img src={props.i1} alt="" className="img" />
          <div className="block">
            {/* for top */}
            <div className="top">
              {/* for time */}
              <div className="time">
                <p>
                  {props.t1} <br /> {props.t2}
                </p>
              </div>

              {/* for icon */}
              <div className="icon">
                <p>⁝</p>
              </div>
            </div>

            {/* for bottom */}
            <div className="bottom">
              {/* heading */}
              <div className="head">
                <h1>{props.h1}</h1>
              </div>

              {/* for eye */}
              <div className="review">
                <div className="eye">
                  <p>👁️ {props.e1}</p>
                </div>
                <div className="heart">
                  <p>{props.l}❤️</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
}
