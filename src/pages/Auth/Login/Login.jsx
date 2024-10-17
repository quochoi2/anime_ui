import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authService } from "~/services/authService";
import { userService } from "~/services/userService";
import { login } from "~/store/slices/userSlice";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(null);
  const [isPasswordValid, setIsPasswordValid] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsEmailValid(isValidEmail(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 6);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    try {
      const res = await authService.signin({ email, password });

      if (res.code === 0) {
        const { id, name, accessToken, refreshToken } = res.data;

        const userProfile = await userService.getProfileByUserId(id);
        console.log(userProfile);

        if (!userProfile) {
          await userService.create(id);
        }

        dispatch(
          login({
            userInfo: {
              id: id,
              email: email,
              name: name,
            },
            accessToken,
            refreshToken,
          }),
        );

        setError("");
        navigate("/");
      } else {
        setError("Login failed. Please check email or password.");
      }
    } catch (err) {
      console.error("Login failed:", err);
      setError("Something wrong. Please come back later");
    }
  };

  return (
    <section className="login spad">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="login__form">
              <h3>Login</h3>
              {error && <div className="alert alert-danger w-max">{error}</div>}
              <form onSubmit={handleLogin}>
                <div className="input__item">
                  <input
                    type="text"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                  />
                  <span className="icon_mail" />
                  {isEmailValid === false && (
                    <span className="text-danger">
                      <i className="fa fa-times ml-[2px]" />
                    </span>
                  )}
                  {isEmailValid === true && (
                    <span className="text-success">
                      <i className="fa fa-check" />
                    </span>
                  )}
                </div>

                <div className="input__item">
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <span className="icon_lock" />
                  {isPasswordValid === false && (
                    <span className="text-danger">
                      <i className="fa fa-times ml-[2px]" />
                    </span>
                  )}
                  {isPasswordValid === true && (
                    <span className="text-success">
                      <i className="fa fa-check" />
                    </span>
                  )}
                </div>

                <button type="submit" className="site-btn">
                  Login Now
                </button>
              </form>
              <Link to="/signup" className="forget_pass">
                Forgot Your Password?
              </Link>
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
