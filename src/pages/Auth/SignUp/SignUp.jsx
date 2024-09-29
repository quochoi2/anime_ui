import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <section className="signup spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="login__form">
              <h3>Sign Up</h3>
              <form action="#">
                <div className="input__item">
                  <input type="text" placeholder="Email address" />
                  <span className="icon_mail" />
                </div>
                <div className="input__item">
                  <input type="text" placeholder="Your Name" />
                  <span className="icon_profile" />
                </div>
                <div className="input__item">
                  <input type="text" placeholder="Password" />
                  <span className="icon_lock" />
                </div>
                <button type="submit" className="site-btn">
                  Login Now
                </button>
              </form>
              <h5>
                Already have an account? <Link to="/login">Log In!</Link>
              </h5>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login__social__links">
              <h3>Login With:</h3>
              <ul>
                <li>
                  <a href="#" className="facebook">
                    <i className="fa fa-facebook" /> Sign in With Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="google">
                    <i className="fa fa-google" /> Sign in With Google
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" /> Sign in With Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpPage;
