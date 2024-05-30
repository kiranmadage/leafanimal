import React from "react";
import "./Para.css";

export function Para(props) {
  return (
    <>
      <div className="para">
        <h1>{props.h}</h1>
        <p>
          {props.p}
        </p>
      </div>
    </>
  );
}
