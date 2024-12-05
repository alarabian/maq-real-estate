import React from "react";

const SignUp = () => {
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
              <h3>Sign Up</h3>
            </div>
            <div className="body">
            <h5>I am </h5>
              <div className="IamRadio">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                  <label className="form-check-label" htmlFor="flexRadioDefault2">
                    Buyer/Owner/Tenant
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">   
                    Agent
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">   
                    Builder
                  </label>
                </div>
              </div>
              <form className="form">
                <div className="form-group mb-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="mail"
                    placeholder="Email"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                  <input
                    type="number"
                    placeholder="Mobile Number"
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" name="flexRadioDefault" id="flexRadioDefault1" />
                  <label className="form-check-label" htmlFor="flexRadioDefault1">   
                  I agree to MAQ <a href="#">T&C</a>, <a href="#">Privacy Policy</a>, & <a href="#">Cookie Policy</a>
                  </label>
                </div>
                  </div>
            <button className="btn submit" >Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
