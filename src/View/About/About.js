import React from "react";
import { Navbar } from "./../../Component/Navbar/Navbar";
import { Footer } from "../../Component/Footer/Footer";
// import { mainpindod } from "../About/mainpindog.webp"
import img1 from "./1img.webp" 
import pini from "./pin2.webp";
import pin3 from "./pin3.webp"
import img2 from "./img2.webp"

// import { img2 } from './1img.webp'
import './About.css'
// import { Card } from "react-bootstrap";










export function About() {
    return (
        <>
            <Navbar />
   

            <div className="content">
                <div className="hii">
                    <h1>About Us</h1>
                    <p>Leaf Animals is an adoption website that <br></br>connects animals in need with the right people.<br></br> Based online, we work as an independent third party between those looking to rehome an animal and those wishing to adopt, foster or sponsor an animal.

                        Launched in March 2021, Leaf Animals is the first and only animal adoption website in Egypt. Using an extensive and thorough process for animal adoption, fostering and sponsorship, we prioritise successful and lifelong matches between humans and animals.

                        Leaf Animals also functions as an informal educational platform that aims to spread awareness on all issues related to animal welfare, well-being and care.</p>
                    <div>
                        <img className="imghii" src={img2}></img>
                    </div>
                </div>
                <div>
                <img className="imghii2" src={img1}></img>
                </div>

            </div>


            <div className="pin">

                <div className="hellow">
                    <h1>Our Founders.</h1>
                    <p>Amina El Shazly and Tanya El Kashef are passionate about animal welfare and founded Leaf Animals with the intention to make responsible rehoming, adoption, fostering and sponsorship more accessible to the community.<br></br><br></br>



                        Amina completed a <u>Master's degree on Egyptian Baladi dogs in 2019</u> and soon after launched Leaf Animals with Tanya as her partner. Each founder has years of experience in rescue and adoption, which afforded them a holistic understanding of the process.<br></br><br></br>





                        Collectively, they have seven animals and continuously work to better understand animal behaviour and their needs.</p>
                </div>

                <div className="pin2">
                    <img src={pini} alt="" className="img" />
                </div>


            </div>

            <div className="mainpin">
                <div className="mainpin1">
                    <h2>Vision</h2>
                    <p>We envision a reality where animals'<br></br> instinctual needs are respected and <br></br>their lives are valued beyond serving a <br></br>human purpose.<br></br>

                        In order to realise this vision, we seek a<br></br> cultural shift and a change in mindset <br></br> where animal welfare becomes a<br></br> priority. This includes animals in homes <br></br>and those that are free roaming and/or <br></br>wild.

                        At the heart of our vision is a belief in<br></br> force free, positivity motivated <br></br> practices and abiding by research <br></br>driven methods and standards.</p>

                </div>
                <div className="mainpinimg">

                </div>

            </div>

            <div className="mainpanda">

                <div className="mainpanda1"></div>

                <div className="mainpanda2">
                    <h2>Mission</h2>
                    <p>Leaf Animals' mission is to improve animal welfare both in Egypt and beyond. Education is a major component in achieving our goal and we've placed it at the forefront of our work.

                        Our website is designed to accelerate successful adoptions, as well as to encourage fostering and animal sponsorship. We want to further use our platform to generate awareness and provide useful information.</p>

                </div>

            </div>

            <div className="Reviews">
                <h1>Reviews</h1>
                <div className="Reviews1" >
                    <div className="Reviews2">

                    </div>
                </div>
            </div>

            <Footer />

        </>
    )
}