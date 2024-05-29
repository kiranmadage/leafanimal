import Img from "./nimg.webp";
import "./Navbar.css"

export function Navbar() {
    return (
        <>
            <div className="main">
                <img src={Img} />

                <ul className="name">


                    <li> <a href='About.js'>About</a></li>
                    <li> <a href='#'>Adopt</a></li>
                    <li> <a href='#'>Foster</a></li>
                    <li> <a href='#'>Sponsor</a></li>
                    <li> <a href='#'>How to</a></li>
                    <li> <a href='#'>Create Profile</a></li>
                    <li> <a href='#'>FF Workshop</a></li>
                    <li> <a href='#'>Blog</a></li>

                </ul>
            </div>
        </>
    );
}