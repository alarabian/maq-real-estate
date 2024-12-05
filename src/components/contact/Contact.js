import Link from 'next/link'
import React from 'react'
import ContactForm from './contact-form/ContactForm'

const Contact = () => {
  return (
    <>
      <section className="aboutSec sectionSpace">
        <div className="container-fluid">
          <div class="sectionTitle">
            <h2>Contact Us</h2>
            <p>
              As the largest platform connecting property buyers and sellers,
              Company boasts over 2 crore monthly visitors and 15 lakh active
              property listings. With over 17 years of experience, Company has
              evolved into a comprehensive service provider, offering home
              loans, interiors and expert advice.
           
              Company also offers extensive research-based knowledge and
              insight-driven platforms like MBTV, India leading online real
              estate YouTube channel, along with proprietary tools providing
              home buyers with price trends, forecasts and locality reviews.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="addInfo">
                <h5>Address</h5>
                <p>98B, 2nd Floor, Namberdar Estate, Taimoor Nagar, New Friends Colony, New Delhi-110025</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="addInfo">
                <h5>Phone</h5>
                <Link href="callto:+91-8851746286">+91-8851746286</Link>
                <hr />
                <Link href="callto:+91-9045206022">+91-9045206022</Link>

              </div>
            </div>
            <div className="col-md-4">
              <div className="addInfo">
                <h5>Mail</h5>
                <Link href="mailto:info@maqtheworldgroup.com">info@maqtheworldgroup.com</Link>
              </div>
            </div>
            <div className="col-md-12">
              <div className="addMap">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28035.45477273549!2d77.22366121083981!3d28.55679230000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce38abca3560d%3A0xbd54bc439e45d16a!2sAbaris%20Softech%20Pvt%20Ltd.!5e0!3m2!1sen!2sin!4v1723621812737!5m2!1sen!2sin" width={"100%"} height={450} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" /> 

              <ContactForm />

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact