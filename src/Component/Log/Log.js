import "./Log.css";
import google from "./Google.jpg";
import fb from "./fb.jpg";

export function Sign() {
    return (
      <>
        <section>
          <p className="cross">❌</p>
          <div className="sign">
            <h1>Sign In</h1>
            <p className="log">
              Already a member? <span>Log In</span>
            </p>
  
            <div className="app">
              <div className="box google">
                <img src={google} alt="" className="icon" />
                Sign up with Google
              </div>
  
              <div className="box facebook">
                <img src={fb} alt="" className="icon" />
                Sign up with Facebook
              </div>
            </div>
  
            <div className="box email">Sign up with email</div>
  
            <p className="read">
              Sign up to this site with a public profile. <span>Read more</span>
            </p>
  
            <p className="term">
              By signing up, you agree to our <span>Terms of Use</span> and
              <span>Privacy Policy</span>
            </p>
          </div>
        </section>
      </>
    );
  }
  