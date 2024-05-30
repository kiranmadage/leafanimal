import React from "react";
import "./Process.css";

export function Process(props) {
  return (
    <>
      <section className="process">
        <div className="p-box1">
          {/* images */}
          <img src={props.i1} alt="" className="p-img" />

          {/* paragraph */}
          <div className="para">
            <h1 className="p-heading">{props.h1}</h1>
            <p className="p-para">
              {props.p1} <br/> {props.p3}
            </p>
          </div>
        </div>

        <div className="p-box2">
          {/* paragraph */}
          <div className="para">
            <h1 className="p-heading ">{props.h2}</h1>
            <p className="p-para">{props.p2}</p>
          </div>

          {/* images */}

          <img src={props.i2} alt="." className="p-img" />
        </div>
      </section>
    </>
  );
}
