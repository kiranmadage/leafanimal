import Img from "./nimg.webp";
import profile from "./profile-user.png"
import "./Navbar.css"

export function Navbar() {
    return (
        <>
            <div className="main">
                <img src={Img} />

                <ul className="name">


                    <li> <a href='/about'>About</a></li>
                    <li> <a href='/adopt'>Adopt</a></li>
                    <li> <a href='/foster'>Foster</a></li>
                    <li> <a href='/sponsor'>Sponsor</a></li>
                    <li> <a href='/how'>How to</a></li>
                    <li> <a href='/cprofile'>Create Profile</a></li>
                    <li> <a href='/ff'>FF Workshop</a></li>
                    <li> <a href='/blog'>Blog</a></li>
                    <li> <img className="profile" src={profile}></img> <a href='/login' className="login">Log In</a></li>

                </ul>
            </div>
        </>
    );
}