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
              <li>About Us</li>
              <li>Leaf Friend</li>
              <li>Leaf Partners</li>
            </ul>
  
            <ul className="ul">
              <li>Adopt</li>
              <li>forever</li>
              <li>Sponsor</li>
            </ul>
  
            <ul className="ul">
              <li>Find a Dog</li>
              <li>Find a Cat</li>
              <li>Find a home</li>
              <li>Find a Sponsor</li>
              <li>Contact Us</li>
            </ul>
  
            <ul className="ul">
              <li>Terms of use</li>
              <li>Refund Policy</li>
              <li>Members Conduct</li>
              <li>FAQs</li>
              <li>Adoption Terms</li>
              <li>Upload Terms</li>
              <li>Consultation Terms</li>
  
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