import React from "react";
import { Para } from "../../Component/Sponsor/Para";
import { Img1 } from "./../../Component/Sponsor/Img1";
import { Img2 } from "./../../Component/Sponsor/Img2";
import { Navbar } from "./../../Component/Navbar/Navbar";
import { Footer } from "./../../Component/Footer/Footer";

import "./Sponsor.css";

import i1 from "./i1.webp";
import i2 from "./i2.webp";
import i3 from "./i3.webp";
import i4 from "./i4.jpeg";
import i5 from "./i5.jpg";
import i6 from "./i6.jpeg";
import i7 from "./i7.jpeg";
import i8 from "./i8.jpeg";
import i9 from "./i9.jpeg";
import i10 from "./i10.jpg";

export function Sponsor() {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Img1 i={i1} />
        <Para
          h={"WHAT IS SPONSORING?"}
          p={
            "Sponsoring is an important part of animal welfare and involves the monetary support of organisations and individuals working in the field."
          }
        />
        <Img1 i={i2} />
      </div>

      <div className="flex">
        <Para
          h={"WHY WOULD YOU CONSIDER SPONSORING?​"}
          p={
            "If you would like to help animals in need but are unable to open your home to them, sponsoring is a sure way to make a difference. The beauty in sponsoring is that no amount is too small."
          }
        />
        <Img1 i={i3} />
        <Para
          h={"WHAT ARE THE BENEFITS OF SPONSORING?"}
          p={
            "By sponsoring you help rescue workers to continue their work, aid countless animals in need and support an important, meaningful cause all from the comfort of your home."
          }
        />
      </div>

      <h1 className="heading">Find an Animal to Sponsor</h1>

      <div className="block">
        <Img2 i={i4} h={"Batoot"} p={"Nasr City"} />
        <Img2 i={i5} h={"Blackey"} p={"Heliopolis"} />
        <Img2 i={i6} h={"Foffa"} p={"Heliopolis"} />
      </div>

      <div className="block">
        <Img2 i={i7} h={"Fosdo2a"} p={"Heliopolis"} />
        <Img2 i={i8} h={"Farfoush"} p={"Heliopolis"} />
        <Img2 i={i9} h={"Sokara"} p={"Heliopolis"} />
      </div>

      <div className="block">
        <Img2 i={i10} h={"Candy (Koki)"} p={"Sheikh Zayed"} />
      </div>

      <button className="b-btn">Load More</button>

      <Footer />
    </>
  );
}
