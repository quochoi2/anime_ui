import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="login spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="login__form">
              <h3>Login</h3>
              <form action="#">
                <div className="input__item">
                  <input type="text" placeholder="Email address" />
                  <span className="icon_mail" />
                </div>
                <div className="input__item">
                  <input type="text" placeholder="Password" />
                  <span className="icon_lock" />
                </div>
                <button type="submit" className="site-btn">
                  Login Now
                </button>
              </form>
              <a href="#" className="forget_pass">
                Forgot Your Password?
              </a>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="login__register">
              <h3>Do not Have An Account?</h3>
              <Link to="/signup" className="primary-btn">
                Register Now
              </Link>
            </div>
          </div>
        </div>
        <div className="login__social">
          <div className="row d-flex justify-content-center">
            <div className="col-lg-6">
              <div className="login__social__links">
                <span>or</span>
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
      </div>
    </section>
  );
};

export default LoginPage;
