import React from "react";
import { FaSquareGooglePlus } from "react-icons/fa6";

const Login = () => {
  return (
    <>
      <section
        className="fullPage"
        style={{
          backgroundImage: 'url("/assets/images/bg-icon-1.png")',
          backgroundColor: "#f0eff7",
        }}
      >
        <div className="authBody">
          <div className="topBody">
            <div className="title">
              <h3>Login</h3>
            </div>
            <div className="body">
              <h5>Are you </h5>
              <ul className="self">
                <li>Buyer / Owner </li>
                <li>Agent / Builder</li>
              </ul>
              <form className="form">
                <input
                  type="text"
                  placeholder="Enter Mobile No"
                  className="form-control"
                />
                <a href="/login-verify" className="btn submitBtn">
                  Next
                </a>
                <span>Need Help?</span>
              </form>

              <div className="addAnother">
                <span className="with">or login with</span>
                <ul>
                  <li>
                    <FaSquareGooglePlus />
                    Google
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="otherWay">
            <p>
              New to MAQ the world group <a href="/signup">Sign Up</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
