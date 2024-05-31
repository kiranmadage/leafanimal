import React from "react";
import "./How.css";
import { Pimg } from "../../Component/How/Pimg";
import { Ppara } from "./../../Component/How/Ppara";
import { Navbar } from "./../../Component/Navbar/Navbar";
import { Footer } from "./../../Component/Footer/Footer";

import img from "./how1.jpg";
import img1 from "./p1.webp";
import img2 from "./p2.webp";
import img3 from "./p3.webp";
import img4 from "./p4.webp";
import img5 from "./p5.webp";

export function How() {
  return (
    <>
      <Navbar />
      {/* main Section */}
      <section className="h-main">
        {/* first para */}
        <div className="hm-box1">
          <h1 className="hm-heading">How to Apply to Adopt</h1>

          <p className="hm-para">
            Bringing an animal into your home is a BIG decision and not <br />{" "}
            one to be taken lightly. The entire household needs to agree <br />{" "}
            on the decision before any further steps are taken. We want <br />{" "}
            to ensure that each household is aware of, willing to and able
            <br /> to accept the physical and financial responsibilities of
            <br /> bringing an animal into their home.
          </p>
        </div>

        {/* image */}
        <div className="hm-box2">
          <img src={img} alt="cat" className="h-img" />
        </div>
      </section>

      {/* images and para */}
{/* 1 */}
      <div className="p-images">
        <div className="bp-box2">
          <Pimg i1={img1} />
          <Ppara h1={1} p1={"Visit our website"} p3={"www.leafanimals.com"} />
        </div>

        <div className="bp-box2">
          <Ppara h1={2} p1={"On the homepage select 'Dogs' or 'Cats' to browse either.Alternatively, you can click on 'Adopt' in the menu bar and choose from there."} />
          <Pimg i1={img2} />
        </div>
      </div>

{/* 2 */}
      <div className="p-images">
        <div className="bp-box2">
          <Pimg i1={img3} />
          <Ppara h1={3} p1={"When you see an animal that interests you, click on 'View Profile'"}  />
        </div>

        <div className="bp-box2">
          <Ppara h1={4} p1={"Scroll down and learn more about the animal from their detailed profile and if they seem like a good match, click on 'Adopt Me' ."} />
          <Pimg i1={img4} />
        </div>
      </div>

      {/* 3 */}
      <div className="p-images">
        <div className="bp-box2">
          <Pimg i1={img5} />
          <Ppara h1={5} p1={"Fill out the adoption application for the animal you chose."}  />
        </div>

        <div className="bp-box2">
          <Ppara h1={6} p1={"If your application is approved, our team will contact you for an online interview usin    g the contact information in your application."} />
          
        </div>
      </div>


      {/* Block */}
      <section className="h-block">
        <div className="hb-para">
          <h2 className="hb-head">Tips, Tricks & Terms</h2>
          <ul className="hb-ul">
            <li className="hb-li">
              When you fill out the application, please be as detailed as
              possible to help our team learn the most about you and your home.
            </li>
            <li className="hb-li">Do not fill out a form for someone else.</li>
            <li className="hb-li">
              Before applying for an animal, please make sure that no one in the
              household is allergic.
            </li>
          </ul>
          <p className="hb-p">
            For more tips and terms and conditions, please click.
            <span>here</span>.
          </p>
        </div>
      </section>

      {/* Button */}
      <button className="btn">Back to homepage</button>

      <Footer />
    </>
  );
}
