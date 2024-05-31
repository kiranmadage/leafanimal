import React from "react";
import "./FF.css";
import {Navbar} from "./../../Component/Navbar/Navbar"
import {Footer} from "./../../Component/Footer/Footer"
import img2 from "./ff-2.webp";

export function FF() {
  return (
    <>

    <Navbar/>
      {/* Main */}
      <section className="f-img">
        <h1>An Introduction to Force-Free Training</h1>
        <div className="m-box">
          <p>
            A 45 minute workshop on Force Free philosophies and practical
            techniques.
            <br></br> <br></br> Price: 400 EGP
          </p>

          <button className="btn1">Buy Now</button>
        </div>
      </section>

      {/*Block 1*/}
      <section className="block1">
        <div className="b-para">
          <h3>
            A workshop by Hound Charming in collaboration with Leaf Animals.
          </h3>

          <p>
            This 45 minute workshop is designed to give potential adopters and
            new or inexperienced pet guardians an overview of Force Free
            philosophies and practical techniques. <br></br> ​<br></br>{" "}
            <br></br> Topics will include the definition of Force Free training
            and animal management, as well as five common training issues that
            pet parents encounter. Real life case studies and video examples
            featuring past and present Hound Charming clients will be
            referenced.<br></br> <br></br> If by the end of the workshop you
            would like to know more either about the science of how animals
            learn or the practical application of training Hound Charming can
            refer you to one of their other services.<br></br> <br></br> We hope
            you enjoy the workshop.
          </p>
        </div>
      </section>

      {/* Block 2 */}
      <section className="block2">
        <div className="para">
          <h3>About Emma</h3>

          <p>
            HOUND CHARMING WAS FOUNDED BY CANINE BEHAVIOUR PRACTITIONER AND
            MULTIPLE SPECIES TRAINER, EMMA MCLEAN.<br></br> ​<br></br> <br></br>
            EMMA HAS GAINED A DIPLOMA IN CANINE SCIENCE FROM THE INTERNATIONAL
            SCHOOL OF CANINE PSYCHOLOGY (ISCP) AND GRADUATED FROM HER STUDIES
            WITH DISTINCTION. EMMA HAS ALSO COMPLETED STUDY IN THE FORCE FREE
            TRAINING OF EQUINES UNDER THE MENTORSHIP OF MAX EASEY. EMMA ALSO
            COACHES PEOPLE GLOBALLY TO TRAIN THEIR HORSES AND DOGS WITHOUT
            FORCE.
          </p>
        </div>

        <div className="img2">
          <img src={img2} alt="" className="b-img" />
        </div>
      </section>

      {/* Block 3 */}
      <section className="block3">
        <button className="btn2">Buy Now</button>

        <p>
          If you would like to pay using Vodafone cash or Instapay app, please
          contact us on our social media pages or email us on
          info@leafanimals.com
        </p>
      </section>


      <Footer/>
    </>
  );
}
