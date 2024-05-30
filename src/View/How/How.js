import React from "react";
import "./How.css";
import { Process } from "./../../Component/How/Process";
import {Navbar} from "./../../Component/Navbar/Navbar"
import {Footer} from "./../../Component/Footer/Footer"

import img from "./how1.jpg";
import p1 from "./p1.webp";
import p2 from "./p2.webp";
import p3 from "./p3.webp";
import p4 from "./p4.webp";
import p5 from "./p5.webp";

export function How() {
  return (
    <>
    <Navbar/>
      {/* main Section */}
      <section className="main">
        {/* first para */}
        <div className="m-box1">
          <h1 className="m-heading">How to Apply to Adopt</h1>

          <p className="m-para">
            Bringing an animal into your home is a BIG decision and not <br />{" "}
            one to be taken lightly. The entire household needs to agree <br />{" "}
            on the decision before any further steps are taken. We want <br />{" "}
            to ensure that each household is aware of, willing to and able
            <br /> to accept the physical and financial responsibilities of
            <br /> bringing an animal into their home.
          </p>
        </div>

        {/* image */}
        <div className="m-box2">
          <img src={img} alt="cat" className="img" />
        </div>
      </section>

      {/* process */}
      <Process
        i1={p1}
        i2={p2}
        h1={1}
        h2={2}
        p1={"Visit our website"}
        p3={"www.leafanimals.com"}
        p2={
          "On the homepage select 'Dogs' or 'Cats' to browse either. Alternatively, you can click on 'Adopt' in the menu bar and choose from there."
        }
      />

      <Process
        i1={p3}
        i2={p4}
        h1={3}
        h2={4}
        p1={
          "When you see an animal that interests you, click on 'View Profile'"
        }
        p2={
          "Scroll down and learn more about the animal from their detailed profile and if they seem like a good match, click on 'Adopt Me' ."
        }
      />

      <Process
        i1={p5}
        h1={5}
        h2={6}
        p1={"Fill out the adoption application for the animal you chose."}
        p2={
          "If your application is approved, our team will contact you for an online interview using the contact information in your application."
        }
      />

      {/* Block */}
      <section className="block">
        <div className="b-para">
          <h2>Tips, Tricks & Terms</h2>
          <ul>
            <li>
              When you fill out the application, please be as detailed as
              possible to help our team learn the most about you and your home.
            </li>
            <li>Do not fill out a form for someone else.</li>
            <li>
              Before applying for an animal, please make sure that no one in the
              household is allergic.
            </li>
          </ul>
          <p>
            For more tips and terms and conditions, please click.
            <span>here</span>.
          </p>
        </div>
      </section>

      {/* Button */}
      <button className="btn">Back to homepage</button>

      <Footer/>
    </>
  );
}
