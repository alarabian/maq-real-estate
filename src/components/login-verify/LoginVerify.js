import { IoIosRefresh, IoIosCall } from "react-icons/io";


const LoginVerify = () => {
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
              <h3>Verify</h3>
            </div>
            <div className="body">
              <h6>You’ll receive a 4-digit verification code on</h6>
              <p>9898788789, if you are registered with us</p>
              <ul className="otpHere">
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
              <a href="#" className="btn">
                Continue
              </a>
              <span className="verify">Did not get Verification Code?</span>
            </div>
            <div className="resend">
              <ul>
                <li>
                <IoIosRefresh />

                  <a href="#">Resend Here</a>
                </li>
                <li>
                <IoIosCall />

                  <a href="#">Verify On Call</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginVerify;
