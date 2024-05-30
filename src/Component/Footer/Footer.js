import './Footer.css'
import nav from './nimg.webp'
import facebook from'./facebook.png'
import instagram from './instagram (1).png'
import twetter from './twitter.png'






export function Footer() {
    return (
      <>
        {/* futter */}
        <div className="fut">
          <div className="futter">
            <ul className="ul">
             <a href='/about'> <li>About Us</li></a>
              <a href='#'><li>Leaf Friend</li></a>
             <a href='#'> <li>Leaf Partners</li></a>
            </ul>
  
            <ul className="ul">
             <a href='/adopt'> <li>Adopt</li></a>
              <a href='#'><li>forever</li></a>
              <a href='/sponsor'><li>Sponsor</li></a>
            </ul>
  
            <ul className="ul">
              <a href='#'><li>Find a Dog</li></a>
              <a href='#'><li>Find a Cat</li></a>
              <a href='#'><li>Find a home</li></a>
            <a href='/sponsor'>  <li>Find a Sponsor</li></a>
             <a href='#'> <li>Contact Us</li></a>
            </ul>
  
            <ul className="ul">
            <a href='#'>  <li>Terms of use</li></a>
              <a href='#'><li>Refund Policy</li></a>
              <a href='#'><li>Members Conduct</li></a>
              <a href='#'><li>FAQs</li></a>
             <a href='#'> <li>Adoption Terms</li></a>
             <a href='#'> <li>Upload Terms</li></a>
             <a href='#'> <li>Consultation Terms</li></a>
  
            </ul>
            <img src={nav} />
          </div>
          <div >
            <center>
              <a> <img className="icon" src={facebook} /></a>
              <a> <img className="icon" src={instagram} /></a>
              <a> <img className="icon" src={twetter} /></a>
            </center>
  
          </div>
  
        </div>
  
      </>
      
    );
  }