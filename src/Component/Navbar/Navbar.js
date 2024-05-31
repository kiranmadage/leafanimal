import Img from "./nimg.webp";
import profile from "./profile-user.png"
import "./Navbar.css"

export function Navbar() {
    return (
        <>
            <div className="n-main">
                <img src={Img} className="n-img" />

                <ul className="n-name">


                    <li className="n-li"> <a href='/about' className="n-a">About</a></li>
                    <li className="n-li"> <a href='/adopt' className="n-a">Adopt</a></li>
                    <li className="n-li"> <a href='/foster' className="n-a">Foster</a></li>
                    <li className="n-li"> <a href='/sponsor' className="n-a">Sponsor</a></li>
                    <li className="n-li"> <a href='/how' className="n-a">How to</a></li>
                    <li className="n-li"> <a href='/cprofile' className="n-a">Create Profile</a></li>
                    <li className="n-li"> <a href='/ff' className="n-a">FF Workshop</a></li>
                    <li className="n-li"> <a href='/blog' className="n-a">Blog</a></li>
                    <li className="n-li"> <a href='/login' className="n-login n-a"> <img className="n-profile" src={profile}></img> Log In</a></li>

                </ul>
            </div>
        </>
    );
}